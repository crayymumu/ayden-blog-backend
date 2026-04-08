import type {
  CreatePhotoTagDto,
  MovePhotoTagDto,
  UpdatePhotoTagDto,
} from './dto/photo-tag.dto'
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PhotosPrismaService } from '../../prisma/photos-prisma.service'

interface TagTreeNode {
  id: string
  name: string
  category: string | null
  parentId: string | null
  detail: string | null
  createdAt: Date
  updatedAt: Date | null
  children: TagTreeNode[]
}

@Injectable()
export class PhotoTagService {
  constructor(private readonly prisma: PhotosPrismaService) {}

  findAll() {
    return this.prisma.pTag.findMany({ orderBy: { name: 'asc' } })
  }

  async findTree(): Promise<TagTreeNode[]> {
    const all = await this.prisma.pTag.findMany({ orderBy: { name: 'asc' } })
    const byId = new Map<string, TagTreeNode>()
    for (const t of all) {
      byId.set(t.id, {
        id: t.id,
        name: t.name,
        category: t.category,
        parentId: t.parentId,
        detail: t.detail,
        createdAt: t.createdAt,
        updatedAt: t.updatedAt,
        children: [],
      })
    }
    const roots: TagTreeNode[] = []
    for (const t of all) {
      const node = byId.get(t.id)!
      if (t.parentId && byId.has(t.parentId)) {
        byId.get(t.parentId)!.children.push(node)
      }
      else {
        roots.push(node)
      }
    }
    return roots
  }

  async findOne(id: string) {
    const tag = await this.prisma.pTag.findUnique({ where: { id } })
    if (!tag)
      throw new NotFoundException()
    return tag
  }

  async create(dto: CreatePhotoTagDto) {
    if (dto.parentId) {
      const parent = await this.prisma.pTag.findUnique({
        where: { id: dto.parentId },
      })
      if (!parent)
        throw new NotFoundException()
    }
    return this.prisma.pTag.create({
      data: {
        name: dto.name,
        category: dto.category,
        parentId: dto.parentId ?? null,
        detail: dto.detail,
      },
    })
  }

  async update(id: string, dto: UpdatePhotoTagDto) {
    await this.findOne(id)
    const data: {
      name?: string
      category?: string | null
      detail?: string | null
    } = {}
    if (dto.name !== undefined)
      data.name = dto.name
    if (dto.category !== undefined)
      data.category = dto.category
    if (dto.detail !== undefined)
      data.detail = dto.detail
    return this.prisma.pTag.update({ where: { id }, data })
  }

  private buildChildrenMap(
    rows: { id: string, parentId: string | null }[],
  ): Map<string, string[]> {
    const m = new Map<string, string[]>()
    for (const r of rows) {
      if (r.parentId) {
        if (!m.has(r.parentId))
          m.set(r.parentId, [])
        m.get(r.parentId)!.push(r.id)
      }
    }
    return m
  }

  private descendantIds(
    rootId: string,
    childrenMap: Map<string, string[]>,
  ): Set<string> {
    const s = new Set<string>()
    const stack = [...(childrenMap.get(rootId) ?? [])]
    while (stack.length) {
      const cid = stack.pop()!
      if (s.has(cid))
        continue
      s.add(cid)
      for (const x of childrenMap.get(cid) ?? []) stack.push(x)
    }
    return s
  }

  private postOrderSubtree(
    rootId: string,
    childrenMap: Map<string, string[]>,
  ): string[] {
    const out: string[] = []
    const visit = (rid: string) => {
      for (const c of childrenMap.get(rid) ?? []) visit(c)
      out.push(rid)
    }
    visit(rootId)
    return out
  }

  async move(dto: MovePhotoTagDto) {
    const tag = await this.prisma.pTag.findUnique({ where: { id: dto.tagId } })
    if (!tag)
      throw new NotFoundException()

    const target
      = dto.targetParentId ?? null

    if (target === dto.tagId) {
      throw new BadRequestException()
    }

    if (target) {
      const parent = await this.prisma.pTag.findUnique({ where: { id: target } })
      if (!parent)
        throw new NotFoundException()
    }

    const rows = await this.prisma.pTag.findMany({
      select: { id: true, parentId: true },
    })
    const childrenMap = this.buildChildrenMap(rows)
    const desc = this.descendantIds(dto.tagId, childrenMap)
    if (target && desc.has(target)) {
      throw new BadRequestException()
    }

    return this.prisma.pTag.update({
      where: { id: dto.tagId },
      data: { parentId: target },
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    const rows = await this.prisma.pTag.findMany({
      select: { id: true, parentId: true },
    })
    const childrenMap = this.buildChildrenMap(rows)
    const order = this.postOrderSubtree(id, childrenMap)
    await this.prisma.$transaction(
      order.map(tid => this.prisma.pTag.delete({ where: { id: tid } })),
    )
  }
}
