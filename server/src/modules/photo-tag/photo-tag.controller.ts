import type { Result } from '../../common/interfaces/result.interface'
import type {
  CreatePhotoTagDto,
  MovePhotoTagDto,
  UpdatePhotoTagDto,
} from './dto/photo-tag.dto'
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
import { PhotoTagService } from './photo-tag.service'

@Controller('photo-tag')
export class PhotoTagController {
  constructor(private readonly photoTagService: PhotoTagService) {}

  @Get()
  @Roles('photoAdmin', 'admin')
  async list(): Promise<Result> {
    const data = await this.photoTagService.findAll()
    return success(data)
  }

  @Get('tree')
  @Roles('photoAdmin', 'admin')
  async tree(): Promise<Result> {
    const data = await this.photoTagService.findTree()
    return success(data)
  }

  @Get(':id')
  @Roles('photoAdmin', 'admin')
  async one(@Param('id') id: string): Promise<Result> {
    const data = await this.photoTagService.findOne(id)
    return success(data)
  }

  @Post('move')
  @Roles('photoAdmin', 'admin')
  async move(@Body() dto: MovePhotoTagDto): Promise<Result> {
    const data = await this.photoTagService.move(dto)
    return success(data)
  }

  @Post()
  @Roles('photoAdmin', 'admin')
  async create(@Body() dto: CreatePhotoTagDto): Promise<Result> {
    const data = await this.photoTagService.create(dto)
    return success(data)
  }

  @Put(':id')
  @Roles('photoAdmin', 'admin')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdatePhotoTagDto,
  ): Promise<Result> {
    const data = await this.photoTagService.update(id, dto)
    return success(data)
  }

  @Delete(':id')
  @Roles('photoAdmin', 'admin')
  async remove(@Param('id') id: string): Promise<Result> {
    await this.photoTagService.remove(id)
    return success()
  }
}
