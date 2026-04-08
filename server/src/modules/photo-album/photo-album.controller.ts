import type { Result } from '../../common/interfaces/result.interface'
import type {
  CreatePhotoAlbumDto,
  UpdateAlbumShowDto,
  UpdateAlbumSortDto,
  UpdatePhotoAlbumDto,
} from './dto/photo-album.dto'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { Roles } from '../../common/decorators/roles.decorator'
import { success } from '../../common/helpers/result.helper'
import { PhotoAlbumService } from './photo-album.service'

@Controller('photo-album')
export class PhotoAlbumController {
  constructor(private readonly photoAlbumService: PhotoAlbumService) {}

  @Get()
  @Roles('photoAdmin', 'admin')
  async list(): Promise<Result> {
    const data = await this.photoAlbumService.findAll()
    return success(data)
  }

  @Get(':id')
  @Roles('photoAdmin', 'admin')
  async getOne(@Param('id') id: string): Promise<Result> {
    const data = await this.photoAlbumService.findOne(id)
    return success(data)
  }

  @Post()
  @Roles('photoAdmin', 'admin')
  async create(@Body() dto: CreatePhotoAlbumDto): Promise<Result> {
    const data = await this.photoAlbumService.create(dto)
    return success(data)
  }

  @Put('show')
  @Roles('photoAdmin', 'admin')
  async updateShow(@Body() dto: UpdateAlbumShowDto): Promise<Result> {
    const data = await this.photoAlbumService.updateShow(dto.id, dto.show)
    return success(data)
  }

  @Put('sort')
  @Roles('photoAdmin', 'admin')
  async updateSort(@Body() dto: UpdateAlbumSortDto): Promise<Result> {
    await this.photoAlbumService.updateSort(dto.orderedIds)
    return success()
  }

  @Put()
  @Roles('photoAdmin', 'admin')
  async update(@Body() dto: UpdatePhotoAlbumDto): Promise<Result> {
    await this.photoAlbumService.update(dto)
    return success()
  }

  @Delete(':id')
  @Roles('photoAdmin', 'admin')
  async remove(@Param('id') id: string): Promise<Result> {
    await this.photoAlbumService.remove(id)
    return success()
  }
}
