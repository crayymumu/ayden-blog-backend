import type { Result } from '../../common/interfaces/result.interface'
import type { CreateTagDto, TagListDto, UpdateTagDto } from './dto/tag.dto'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { AllowAnonymous } from '@thallesp/nestjs-better-auth'
import { pageResult, success } from '../../common/helpers/result.helper'
import { TagService } from './tag.service'

@Controller('tag')
@AllowAnonymous()
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async create(@Body() dto: CreateTagDto): Promise<Result> {
    await this.tagService.create(dto)
    return success()
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    await this.tagService.remove(id)
    return success()
  }

  @Put()
  async update(@Body() dto: UpdateTagDto): Promise<Result> {
    await this.tagService.update(dto)
    return success()
  }

  @Get('deleteByIds')
  async deleteByIds(@Query('ids') ids: string): Promise<Result> {
    const idArr = ids.split(',').map(Number).filter(Boolean)
    await this.tagService.deleteByIds(idArr)
    return success()
  }

  @Get('getAllTag')
  async getAllTag(): Promise<Result> {
    const data = await this.tagService.getAllTag()
    return success(data)
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    const data = await this.tagService.findOne(id)
    return success(data)
  }

  @Post('list')
  async list(@Body() dto: TagListDto): Promise<Result> {
    const result = await this.tagService.list(dto)
    return pageResult(
      result.list,
      result.total,
      result.pageNum,
      result.pageSize,
    )
  }
}
