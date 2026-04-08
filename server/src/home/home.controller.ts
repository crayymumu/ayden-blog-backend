import type { Result } from '../common/interfaces/result.interface'
import type { BlogListQueryDto, SearchBlogsDto } from './dto/home.dto'
import { Controller, Get, Param, Query } from '@nestjs/common'
import { AllowAnonymous } from '@thallesp/nestjs-better-auth'
import { success } from '../common/helpers/result.helper'
import { HomeService } from './home.service'

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('health')
  @AllowAnonymous()
  health() {
    return { status: 'ok' }
  }

  @Get('indexCount')
  @AllowAnonymous()
  async indexCount(): Promise<Result> {
    const data = await this.homeService.getIndexCount()
    return success(data)
  }

  @Get('indexBlog')
  @AllowAnonymous()
  async indexBlog(): Promise<Result> {
    const data = await this.homeService.getIndexBlog()
    return success(data)
  }

  @Get('blogList')
  @AllowAnonymous()
  async blogList(@Query() query: BlogListQueryDto): Promise<Result> {
    const data = await this.homeService.getBlogList(
      query.pageIndex,
      query.pageSize,
    )
    return success(data)
  }

  @Get('blogDetail/:id')
  @AllowAnonymous()
  async blogDetail(@Param('id') id: string): Promise<Result> {
    const data = await this.homeService.getBlogDetail(Number(id))
    return success(data)
  }

  @Get('tags')
  @AllowAnonymous()
  async tags(): Promise<Result> {
    const data = await this.homeService.getTagList()
    return success(data)
  }

  @Get('hotBlogs')
  @AllowAnonymous()
  async hotBlogs(@Query('limit') limit?: string): Promise<Result> {
    const data = await this.homeService.getHotBlogList(
      limit ? Number(limit) : undefined,
    )
    return success(data)
  }

  @Get('search')
  @AllowAnonymous()
  async search(@Query() query: SearchBlogsDto): Promise<Result> {
    const data = await this.homeService.searchBlogs(
      query.keyword,
      query.pageIndex,
      query.pageSize,
    )
    return success(data)
  }
}
