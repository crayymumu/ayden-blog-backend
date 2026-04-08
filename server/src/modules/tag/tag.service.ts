import type { Prisma } from '@prisma/client'
import type { CreateTagDto, TagListDto, UpdateTagDto } from './dto/tag.dto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTagDto) {
    return this.prisma.bTag.create({
      data: { ...dto, tagTime: new Date() },
    })
  }

  async remove(id: number) {
    return this.prisma.bTag.delete({ where: { tagId: id } })
  }

  async update(dto: UpdateTagDto) {
    const { tagId, ...data } = dto
    return this.prisma.bTag.update({ where: { tagId }, data })
  }

  async findOne(id: number) {
    return this.prisma.bTag.findUnique({ where: { tagId: id } })
  }

  async list(dto: TagListDto) {
    const pageSize = dto.pageSize ?? 10
    const pageIndex = dto.pageIndex ?? 1
    const where: Prisma.BTagWhereInput = {}
    if (dto.tagName)
      where.tagName = { contains: dto.tagName }

    const [list, total] = await Promise.all([
      this.prisma.bTag.findMany({
        where,
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
      }),
      this.prisma.bTag.count({ where }),
    ])
    return { list, total, pageNum: pageIndex, pageSize }
  }

  async deleteByIds(ids: number[]) {
    return this.prisma.bTag.deleteMany({ where: { tagId: { in: ids } } })
  }

  async getAllTag() {
    const tags = await this.prisma.bTag.findMany()
    const tagsWithCount = await Promise.all(
      tags.map(async (tag) => {
        const usedBy = await this.prisma.bBlogTag.count({
          where: { tagId: tag.tagId },
        })
        return { ...tag, usedBy }
      }),
    )
    return tagsWithCount
  }
}
