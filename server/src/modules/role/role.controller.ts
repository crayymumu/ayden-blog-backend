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
import { RoleService } from "./role.service";
import { CreateRoleDto, UpdateRoleDto } from "./dto/role.dto";
import { success, pageResult } from "../../common/helpers/result.helper";
import { Result } from "../../common/interfaces/result.interface";

@Controller("role")
@AllowAnonymous()
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() dto: CreateRoleDto): Promise<Result> {
    await this.roleService.create(dto);
    return success();
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number): Promise<Result> {
    await this.roleService.remove(id);
    return success();
  }

  @Put()
  async update(@Body() dto: UpdateRoleDto): Promise<Result> {
    await this.roleService.update(dto);
    return success();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<Result> {
    const data = await this.roleService.findOne(id);
    return success(data);
  }

  @Get()
  async findAll(
    @Query("page") page = "0",
    @Query("size") size = "0",
  ): Promise<Result> {
    const p = parseInt(page);
    const s = parseInt(size);
    const { list, total } = await this.roleService.findAll(p, s);
    if (p === 0 && s === 0) return success(list);
    return pageResult(list, total, p, s);
  }
}
