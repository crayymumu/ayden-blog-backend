import type { Result } from '../../common/interfaces/result.interface'
import type { CreateBlogTagDto, UpdateBlogTagDto } from './dto/blog-tag.dto'
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
import { BlogTagService } from './blog-tag.service'

@Controller('blog/tag')
@AllowAnonymous()
export class BlogTagController {
  constructor(private readonly blogTagService: BlogTagService) {}

  @Post()
  async create(@Body() dto: CreateBlogTagDto): Promise<Result> {
    await this.blogTagService.create(dto)
    return success()
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    await this.blogTagService.remove(id)
    return success()
  }

  @Put()
  async update(@Body() dto: UpdateBlogTagDto): Promise<Result> {
    await this.blogTagService.update(dto)
    return success()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    const data = await this.blogTagService.findOne(id)
    return success(data)
  }

  @Get()
  async findAll(
    @Query('pageIndex') pageIndex = '1',
    @Query('pageSize') pageSize = '10',
  ): Promise<Result> {
    const pi = Number.parseInt(pageIndex) || 1
    const ps = Number.parseInt(pageSize) || 10
    const { list, total } = await this.blogTagService.findAll(pi, ps)
    return pageResult(list, total, pi, ps)
  }
}
