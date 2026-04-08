import type { Prisma } from '.prisma/photos-client'
import type {
  CreatePhotoAlbumDto,
  UpdatePhotoAlbumDto,
} from './dto/photo-album.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { PhotosPrismaService } from '../../prisma/photos-prisma.service'

function normalizeSortValue(sort: number | undefined): number {
  return sort === undefined || sort < 0 ? 0 : sort
}

@Injectable()
export class PhotoAlbumService {
  constructor(private readonly prisma: PhotosPrismaService) {}

  findAll() {
    return this.prisma.pAlbum.findMany({
      where: { del: 0 },
      orderBy: { sort: 'asc' },
    })
  }

  async findOne(id: string) {
    const album = await this.prisma.pAlbum.findFirst({
      where: { id, del: 0 },
    })
    if (!album)
      throw new NotFoundException()
    return album
  }

  create(dto: CreatePhotoAlbumDto) {
    return this.prisma.pAlbum.create({
      data: {
        name: dto.name,
        albumValue: dto.albumValue,
        detail: dto.detail,
        theme: dto.theme ?? '0',
        show: dto.show ?? 1,
        sort: normalizeSortValue(dto.sort),
        randomShow: dto.randomShow ?? 1,
        license: dto.license,
        imageSorting: dto.imageSorting ?? 1,
        cover: dto.cover,
        del: 0,
      },
    })
  }

  async update(dto: UpdatePhotoAlbumDto) {
    const { id, name, albumValue, detail, theme, show, sort, randomShow, license, imageSorting, cover }
      = dto
    await this.prisma.$transaction(async (tx) => {
      const existing = await tx.pAlbum.findUnique({ where: { id } })
      if (!existing)
        throw new NotFoundException()
      const data: Prisma.PAlbumUpdateInput = {}
      if (name !== undefined)
        data.name = name
      if (albumValue !== undefined)
        data.albumValue = albumValue
      if (detail !== undefined)
        data.detail = detail
      if (theme !== undefined)
        data.theme = theme
      if (show !== undefined)
        data.show = show
      if (sort !== undefined)
        data.sort = normalizeSortValue(sort)
      if (randomShow !== undefined)
        data.randomShow = randomShow
      if (license !== undefined)
        data.license = license
      if (imageSorting !== undefined)
        data.imageSorting = imageSorting
      if (cover !== undefined)
        data.cover = cover
      if (Object.keys(data).length > 0) {
        await tx.pAlbum.update({ where: { id }, data })
      }
      if (
        albumValue !== undefined
        && albumValue !== existing.albumValue
      ) {
        await tx.pImageAlbumRelation.updateMany({
          where: { albumValue: existing.albumValue },
          data: { albumValue },
        })
      }
    })
  }

  async remove(id: string) {
    const existing = await this.prisma.pAlbum.findUnique({ where: { id } })
    if (!existing)
      throw new NotFoundException()
    await this.prisma.pAlbum.update({
      where: { id },
      data: { del: 1 },
    })
  }

  async updateShow(id: string, show: number) {
    const existing = await this.prisma.pAlbum.findUnique({ where: { id } })
    if (!existing)
      throw new NotFoundException()
    return this.prisma.pAlbum.update({
      where: { id },
      data: { show },
    })
  }

  async updateSort(orderedIds: string[]) {
    if (!orderedIds.length)
      return
    await Promise.all(
      orderedIds.map((albumId, index) =>
        this.prisma.pAlbum.update({
          where: { id: albumId },
          data: { sort: index },
        }),
      ),
    )
  }
}
