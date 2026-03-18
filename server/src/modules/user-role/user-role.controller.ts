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
import { UserRoleService } from "./user-role.service";
import { CreateUserRoleDto, UpdateUserRoleDto } from "./dto/user-role.dto";
import { success, pageResult } from "../../common/helpers/result.helper";
import { Result } from "../../common/interfaces/result.interface";

@Controller("user/role")
@AllowAnonymous()
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post()
  async create(@Body() dto: CreateUserRoleDto): Promise<Result> {
    await this.userRoleService.create(dto);
    return success();
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number): Promise<Result> {
    await this.userRoleService.remove(id);
    return success();
  }

  @Put()
  async update(@Body() dto: UpdateUserRoleDto): Promise<Result> {
    await this.userRoleService.update(dto);
    return success();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<Result> {
    const data = await this.userRoleService.findOne(id);
    return success(data);
  }

  @Get()
  async findAll(
    @Query("pageIndex") pageIndex = "1",
    @Query("pageSize") pageSize = "10",
  ): Promise<Result> {
    const pi = parseInt(pageIndex) || 1;
    const ps = parseInt(pageSize) || 10;
    const { list, total } = await this.userRoleService.findAll(pi, ps);
    return pageResult(list, total, pi, ps);
  }
}
