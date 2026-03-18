import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from "@nestjs/common";
import { AllowAnonymous } from "@thallesp/nestjs-better-auth";
import { BlogCategoryService } from "./blog-category.service";
import {
  CreateBlogCategoryDto,
  UpdateBlogCategoryDto,
} from "./dto/blog-category.dto";
import { success, pageResult } from "../../common/helpers/result.helper";
import { Result } from "../../common/interfaces/result.interface";

@Controller("blog/category")
@AllowAnonymous()
export class BlogCategoryController {
  constructor(private readonly blogCategoryService: BlogCategoryService) {}

  @Post()
  async create(@Body() dto: CreateBlogCategoryDto): Promise<Result> {
    await this.blogCategoryService.create(dto);
    return success();
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number): Promise<Result> {
    await this.blogCategoryService.remove(id);
    return success();
  }

  @Put()
  async update(@Body() dto: UpdateBlogCategoryDto): Promise<Result> {
    await this.blogCategoryService.update(dto);
    return success();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<Result> {
    const data = await this.blogCategoryService.findOne(id);
    return success(data);
  }

  @Get()
  async findAll(
    @Query("pageIndex") pageIndex = "1",
    @Query("pageSize") pageSize = "10",
  ): Promise<Result> {
    const pi = parseInt(pageIndex) || 1;
    const ps = parseInt(pageSize) || 10;
    const { list, total } = await this.blogCategoryService.findAll(pi, ps);
    return pageResult(list, total, pi, ps);
  }
}
