import type { Result } from '../../common/interfaces/result.interface'
import type { BlogListDto, CreateBlogDto, UpdateBlogDto } from './dto/blog.dto'
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
import { Roles } from '../../common/decorators/roles.decorator'
import { pageResult, success } from '../../common/helpers/result.helper'
import { BlogService } from './blog.service'

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  @Roles('admin')
  async create(@Body() dto: CreateBlogDto): Promise<Result> {
    const blog = await this.blogService.create(dto)
    return success(blog)
  }

  @Delete(':id')
  @Roles('admin')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    await this.blogService.remove(id)
    return success()
  }

  @Put()
  @Roles('admin')
  async update(@Body() dto: UpdateBlogDto): Promise<Result> {
    await this.blogService.update(dto)
    return success()
  }

  @Get('fuzzy')
  @AllowAnonymous()
  async fuzzy(
    @Query('searchText') searchText: string,
    @Query('pageIndex') pageIndex = '1',
  ): Promise<Result> {
    const result = await this.blogService.fuzzySearch(
      searchText,
      Number.parseInt(pageIndex) || 1,
    )
    return pageResult(
      result.list,
      result.total,
      result.pageNum,
      result.pageSize,
    )
  }

  @Get('selectPlaceOnFile')
  @AllowAnonymous()
  async selectPlaceOnFile(): Promise<Result> {
    const data = await this.blogService.selectPlaceOnFile()
    return success(data)
  }

  @Get('selectBlogByTagId')
  @AllowAnonymous()
  async selectBlogByTagId(@Query('tagId') tagId: string): Promise<Result> {
    const data = await this.blogService.selectBlogByTagId(Number.parseInt(tagId))
    return success(data)
  }

  @Get('selectBlogByDate')
  @AllowAnonymous()
  async selectBlogByDate(
    @Query('createDate') createDate: string,
  ): Promise<Result> {
    const data = await this.blogService.selectBlogByDate(createDate)
    return success(data)
  }

  @Get('topRead')
  @AllowAnonymous()
  async topRead(@Query('count') count = '5'): Promise<Result> {
    const data = await this.blogService.topRead(Number.parseInt(count) || 5)
    return success(data)
  }

  @Get(':id/record')
  @AllowAnonymous()
  async findOneRecord(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    const data = await this.blogService.findOneAndRecord(id)
    return success(data)
  }

  @Get(':id')
  @AllowAnonymous()
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    const data = await this.blogService.findOne(id)
    return success(data)
  }

  @Post('blogList')
  @AllowAnonymous()
  async blogList(@Body() dto: BlogListDto): Promise<Result> {
    const result = await this.blogService.blogList(dto)
    return pageResult(
      result.list,
      result.total,
      result.pageNum,
      result.pageSize,
    )
  }

  @Post('blogListIndex')
  @AllowAnonymous()
  async blogListIndex(@Body() dto: BlogListDto): Promise<Result> {
    const result = await this.blogService.blogListIndex(dto)
    return pageResult(
      result.list,
      result.total,
      result.pageNum,
      result.pageSize,
    )
  }

  @Post('saveTemp')
  @AllowAnonymous()
  async saveTemp(@Body() dto: CreateBlogDto): Promise<Result> {
    await this.blogService.saveTemp(dto)
    return success()
  }

  @Post('updateBlog')
  @AllowAnonymous()
  async updateBlog(@Body() dto: UpdateBlogDto): Promise<Result> {
    await this.blogService.update(dto)
    return success()
  }
}
