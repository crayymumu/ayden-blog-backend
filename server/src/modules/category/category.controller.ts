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
import { CategoryService } from "./category.service";
import {
  CreateCategoryDto,
  UpdateCategoryDto,
  CategoryListDto,
} from "./dto/category.dto";
import { success, pageResult } from "../../common/helpers/result.helper";
import { Result } from "../../common/interfaces/result.interface";

@Controller("category")
@AllowAnonymous()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() dto: CreateCategoryDto): Promise<Result> {
    await this.categoryService.create(dto);
    return success();
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number): Promise<Result> {
    await this.categoryService.remove(id);
    return success();
  }

  @Put()
  async update(@Body() dto: UpdateCategoryDto): Promise<Result> {
    await this.categoryService.update(dto);
    return success();
  }

  @Get("deleteByIds")
  async deleteByIds(@Query("ids") ids: string): Promise<Result> {
    const idArr = ids.split(",").map(Number).filter(Boolean);
    await this.categoryService.deleteByIds(idArr);
    return success();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<Result> {
    const data = await this.categoryService.findOne(id);
    return success(data);
  }

  @Post("list")
  async list(@Body() dto: CategoryListDto): Promise<Result> {
    const result = await this.categoryService.list(dto);
    return pageResult(
      result.list,
      result.total,
      result.pageNum,
      result.pageSize,
    );
  }
}
