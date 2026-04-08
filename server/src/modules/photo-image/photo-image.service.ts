import type { Prisma } from '.prisma/photos-client'
import type {
  BatchDeletePhotoImageDto,
  CheckPhotoImageDuplicateDto,
  CreatePhotoImageDto,
  ImageAlbumRelationDto,
  ImageTagRelationDto,
  PhotoImageListDto,
  PhotoImageSortDto,
  TogglePhotoImageFeaturedDto,
  TogglePhotoImageShowDto,
  UpdatePhotoImageDto,
} from './dto/photo-image.dto'
import { BadRequestException, Injectable } from '@nestjs/common'
import { PhotosPrismaService } from '../../prisma/photos-prisma.service'

@Injectable()
export class PhotoImageService {
  constructor(private readonly prisma: PhotosPrismaService) {}

  async create(dto: CreatePhotoImageDto) {
    return this.prisma.pImage.create({
      data: {
        url: dto.url,
        width: dto.width,
        height: dto.height,
        imageName: dto.imageName,
        previewUrl: dto.previewUrl,
        videoUrl: dto.videoUrl,
        originalKey: dto.originalKey,
        previewKey: dto.previewKey,
        videoKey: dto.videoKey,
        blurhash: dto.blurhash,
        exif: dto.exif as Prisma.InputJsonValue | undefined,
        labels: dto.labels as Prisma.InputJsonValue | undefined,
        lon: dto.lon,
        lat: dto.lat,
        title: dto.title,
        detail: dto.detail,
        type: dto.type,
        show: dto.show,
        showOnMainpage: dto.showOnMainpage,
        featured: dto.featured,
        sort: dto.sort,
      },
    })
  }

  async remove(id: string) {
    await this.prisma.pImage.update({
      where: { id },
      data: { del: 1 },
    })
  }

  async batchRemove(dto: BatchDeletePhotoImageDto) {
    await this.prisma.pImage.updateMany({
      where: { id: { in: dto.ids } },
      data: { del: 1 },
    })
  }

  async update(dto: UpdatePhotoImageDto) {
    const { id, ...rest } = dto
    const data: Prisma.PImageUpdateInput = {}
    const keys = [
      'url',
      'width',
      'height',
      'imageName',
      'previewUrl',
      'videoUrl',
      'originalKey',
      'previewKey',
      'videoKey',
      'blurhash',
      'exif',
      'labels',
      'lon',
      'lat',
      'title',
      'detail',
      'type',
      'show',
      'showOnMainpage',
      'featured',
      'sort',
    ] as const
    for (const key of keys) {
      const v = rest[key]
      if (v !== undefined) {
        if (key === 'exif' || key === 'labels') {
          (data as Record<string, unknown>)[key] = v as Prisma.InputJsonValue
        }
        else {
          (data as Record<string, unknown>)[key] = v
        }
      }
    }
    await this.prisma.pImage.update({ where: { id }, data })
  }

  async toggleShow(dto: TogglePhotoImageShowDto) {
    await this.prisma.pImage.update({
      where: { id: dto.id },
      data: { show: dto.show },
    })
  }

  async toggleFeatured(dto: TogglePhotoImageFeaturedDto) {
    await this.prisma.pImage.update({
      where: { id: dto.id },
      data: { featured: dto.featured },
    })
  }

  async updateSort(dto: PhotoImageSortDto) {
    await this.prisma.$transaction(
      dto.orderedIds.map((id, index) =>
        this.prisma.pImage.update({
          where: { id },
          data: { sort: index },
        }),
      ),
    )
  }

  async list(dto: PhotoImageListDto) {
    const pageIndex = dto.pageIndex ?? 1
    const pageSize = dto.pageSize ?? 10
    const scope = dto.delScope ?? 'active'
    const where: Prisma.PImageWhereInput = {}
    if (scope === 'active')
      where.del = 0
    else if (scope === 'deleted')
      where.del = 1
    if (dto.albumValue) {
      const rels = await this.prisma.pImageAlbumRelation.findMany({
        where: { albumValue: dto.albumValue },
        select: { imageId: true },
      })
      where.id = { in: rels.map(r => r.imageId) }
    }
    const [list, total] = await Promise.all([
      this.prisma.pImage.findMany({
        where,
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
        orderBy: [{ sort: 'asc' }, { createdAt: 'desc' }],
      }),
      this.prisma.pImage.count({ where }),
    ])
    return { list, total, pageNum: pageIndex, pageSize }
  }

  async findOne(id: string) {
    return this.prisma.pImage.findUnique({ where: { id } })
  }

  async checkDuplicate(dto: CheckPhotoImageDuplicateDto) {
    const or: Prisma.PImageWhereInput[] = []
    if (dto.blurhash)
      or.push({ blurhash: dto.blurhash })
    if (dto.url)
      or.push({ url: dto.url })
    if (!or.length) {
      throw new BadRequestException('blurhash or url required')
    }
    return this.prisma.pImage.findFirst({
      where: { del: 0, OR: or },
    })
  }

  async getImageRelations(imageId: string) {
    const [albums, tags] = await Promise.all([
      this.prisma.pImageAlbumRelation.findMany({
        where: { imageId },
        select: { albumValue: true },
      }),
      this.prisma.pImageTagRelation.findMany({
        where: { imageId },
        select: { tagId: true },
      }),
    ])
    return {
      albumValues: albums.map(a => a.albumValue),
      tagIds: tags.map(t => t.tagId),
    }
  }

  async bindAlbum(dto: ImageAlbumRelationDto) {
    await this.prisma.pImageAlbumRelation.upsert({
      where: {
        imageId_albumValue: {
          imageId: dto.imageId,
          albumValue: dto.albumValue,
        },
      },
      create: { imageId: dto.imageId, albumValue: dto.albumValue },
      update: {},
    })
  }

  async unbindAlbum(dto: ImageAlbumRelationDto) {
    await this.prisma.pImageAlbumRelation.deleteMany({
      where: { imageId: dto.imageId, albumValue: dto.albumValue },
    })
  }

  async bindTag(dto: ImageTagRelationDto) {
    const exists = await this.prisma.pImageTagRelation.findFirst({
      where: { imageId: dto.imageId, tagId: dto.tagId },
    })
    if (exists)
      return exists
    return this.prisma.pImageTagRelation.create({
      data: { imageId: dto.imageId, tagId: dto.tagId },
    })
  }

  async unbindTag(dto: ImageTagRelationDto) {
    await this.prisma.pImageTagRelation.deleteMany({
      where: { imageId: dto.imageId, tagId: dto.tagId },
    })
  }
}
