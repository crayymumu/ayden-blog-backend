import type {
  CreatePhotoConfigDto,
  UpdatePhotoConfigDto,
} from './dto/photo-config.dto'
import { Injectable, NotFoundException } from '@nestjs/common'
import { PhotosPrismaService } from '../../prisma/photos-prisma.service'

@Injectable()
export class PhotoConfigService {
  constructor(private readonly prisma: PhotosPrismaService) {}

  findAll() {
    return this.prisma.pConfig.findMany({ orderBy: { configKey: 'asc' } })
  }

  findByKeys(keysParam: string | undefined) {
    const keys = (keysParam ?? '')
      .split(',')
      .map(k => k.trim())
      .filter(Boolean)
    if (keys.length === 0) {
      return []
    }
    return this.prisma.pConfig.findMany({
      where: { configKey: { in: keys } },
      orderBy: { configKey: 'asc' },
    })
  }

  async findOne(id: string) {
    const row = await this.prisma.pConfig.findUnique({ where: { id } })
    if (!row)
      throw new NotFoundException()
    return row
  }

  create(dto: CreatePhotoConfigDto) {
    return this.prisma.pConfig.create({
      data: {
        configKey: dto.configKey,
        configValue: dto.configValue ?? null,
        detail: dto.detail ?? null,
      },
    })
  }

  async update(dto: UpdatePhotoConfigDto) {
    await this.findOne(dto.id)
    const data: {
      configKey?: string
      configValue?: string | null
      detail?: string | null
    } = {}
    if (dto.configKey !== undefined)
      data.configKey = dto.configKey
    if (dto.configValue !== undefined)
      data.configValue = dto.configValue
    if (dto.detail !== undefined)
      data.detail = dto.detail
    if (Object.keys(data).length === 0) {
      return this.findOne(dto.id)
    }
    return this.prisma.pConfig.update({
      where: { id: dto.id },
      data,
    })
  }

  async remove(id: string) {
    await this.findOne(id)
    await this.prisma.pConfig.delete({ where: { id } })
  }
}
