import type { Result } from '../../common/interfaces/result.interface'
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
import { pageResult, success } from '../../common/helpers/result.helper'
import { PhotoImageService } from './photo-image.service'

@Controller('photo-image')
@Roles('photoAdmin', 'admin')
export class PhotoImageController {
  constructor(private readonly photoImageService: PhotoImageService) {}

  @Post()
  async create(@Body() dto: CreatePhotoImageDto): Promise<Result> {
    const data = await this.photoImageService.create(dto)
    return success(data)
  }

  @Delete('batch')
  async batchRemove(@Body() dto: BatchDeletePhotoImageDto): Promise<Result> {
    await this.photoImageService.batchRemove(dto)
    return success()
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Result> {
    await this.photoImageService.remove(id)
    return success()
  }

  @Put()
  async update(@Body() dto: UpdatePhotoImageDto): Promise<Result> {
    await this.photoImageService.update(dto)
    return success()
  }

  @Put('show')
  async toggleShow(@Body() dto: TogglePhotoImageShowDto): Promise<Result> {
    await this.photoImageService.toggleShow(dto)
    return success()
  }

  @Put('featured')
  async toggleFeatured(
    @Body() dto: TogglePhotoImageFeaturedDto,
  ): Promise<Result> {
    await this.photoImageService.toggleFeatured(dto)
    return success()
  }

  @Put('sort')
  async sort(@Body() dto: PhotoImageSortDto): Promise<Result> {
    await this.photoImageService.updateSort(dto)
    return success()
  }

  @Post('list')
  async list(@Body() dto: PhotoImageListDto): Promise<Result> {
    const result = await this.photoImageService.list(dto)
    return pageResult(
      result.list,
      result.total,
      result.pageNum,
      result.pageSize,
    )
  }

  @Post('check-duplicate')
  async checkDuplicate(
    @Body() dto: CheckPhotoImageDuplicateDto,
  ): Promise<Result> {
    const data = await this.photoImageService.checkDuplicate(dto)
    return success(data)
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Result> {
    const data = await this.photoImageService.findOne(id)
    return success(data)
  }

  @Get(':id/relations')
  async getRelations(@Param('id') id: string): Promise<Result> {
    const data = await this.photoImageService.getImageRelations(id)
    return success(data)
  }

  @Post('bind-album')
  async bindAlbum(@Body() dto: ImageAlbumRelationDto): Promise<Result> {
    await this.photoImageService.bindAlbum(dto)
    return success()
  }

  @Delete('unbind-album')
  async unbindAlbum(@Body() dto: ImageAlbumRelationDto): Promise<Result> {
    await this.photoImageService.unbindAlbum(dto)
    return success()
  }

  @Post('bind-tag')
  async bindTag(@Body() dto: ImageTagRelationDto): Promise<Result> {
    await this.photoImageService.bindTag(dto)
    return success()
  }

  @Delete('unbind-tag')
  async unbindTag(@Body() dto: ImageTagRelationDto): Promise<Result> {
    await this.photoImageService.unbindTag(dto)
    return success()
  }
}
