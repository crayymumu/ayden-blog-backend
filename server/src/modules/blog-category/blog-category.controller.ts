import type { Result } from '../../common/interfaces/result.interface'
import type {
  CreateBlogCategoryDto,
  UpdateBlogCategoryDto,
} from './dto/blog-category.dto'
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
import { BlogCategoryService } from './blog-category.service'

@Controller('blog/category')
@AllowAnonymous()
export class BlogCategoryController {
  constructor(private readonly blogCategoryService: BlogCategoryService) {}

  @Post()
  async create(@Body() dto: CreateBlogCategoryDto): Promise<Result> {
    await this.blogCategoryService.create(dto)
    return success()
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    await this.blogCategoryService.remove(id)
    return success()
  }

  @Put()
  async update(@Body() dto: UpdateBlogCategoryDto): Promise<Result> {
    await this.blogCategoryService.update(dto)
    return success()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    const data = await this.blogCategoryService.findOne(id)
    return success(data)
  }

  @Get()
  async findAll(
    @Query('pageIndex') pageIndex = '1',
    @Query('pageSize') pageSize = '10',
  ): Promise<Result> {
    const pi = Number.parseInt(pageIndex) || 1
    const ps = Number.parseInt(pageSize) || 10
    const { list, total } = await this.blogCategoryService.findAll(pi, ps)
    return pageResult(list, total, pi, ps)
  }
}
