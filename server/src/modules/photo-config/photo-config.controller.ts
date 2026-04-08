import type { Result } from '../../common/interfaces/result.interface'
import type {
  CreatePhotoConfigDto,
  UpdatePhotoConfigDto,
} from './dto/photo-config.dto'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { Roles } from '../../common/decorators/roles.decorator'
import { success } from '../../common/helpers/result.helper'
import { PhotoConfigService } from './photo-config.service'

@Controller('photo-config')
export class PhotoConfigController {
  constructor(private readonly photoConfigService: PhotoConfigService) {}

  @Get()
  @Roles('photoAdmin', 'admin')
  async list(): Promise<Result> {
    const data = await this.photoConfigService.findAll()
    return success(data)
  }

  @Get('keys')
  @Roles('photoAdmin', 'admin')
  async byKeys(@Query('keys') keys: string): Promise<Result> {
    const data = await this.photoConfigService.findByKeys(keys)
    return success(data)
  }

  @Get(':id')
  @Roles('photoAdmin', 'admin')
  async one(@Param('id') id: string): Promise<Result> {
    const data = await this.photoConfigService.findOne(id)
    return success(data)
  }

  @Post()
  @Roles('photoAdmin', 'admin')
  async create(@Body() dto: CreatePhotoConfigDto): Promise<Result> {
    const data = await this.photoConfigService.create(dto)
    return success(data)
  }

  @Put()
  @Roles('photoAdmin', 'admin')
  async update(@Body() dto: UpdatePhotoConfigDto): Promise<Result> {
    const data = await this.photoConfigService.update(dto)
    return success(data)
  }

  @Delete(':id')
  @Roles('photoAdmin', 'admin')
  async remove(@Param('id') id: string): Promise<Result> {
    await this.photoConfigService.remove(id)
    return success()
  }
}
