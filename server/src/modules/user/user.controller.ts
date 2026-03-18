import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from "@nestjs/common";
import { AllowAnonymous } from "@thallesp/nestjs-better-auth";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./dto/user.dto";
import { success, pageResult } from "../../common/helpers/result.helper";
import { Roles } from "../../common/decorators/roles.decorator";
import { Result } from "../../common/interfaces/result.interface";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @AllowAnonymous()
  async create(@Body() dto: CreateUserDto): Promise<Result> {
    const user = await this.userService.create(dto);
    return success(user);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<Result> {
    await this.userService.remove(id);
    return success();
  }

  @Put()
  async update(@Body() dto: UpdateUserDto): Promise<Result> {
    await this.userService.update(dto);
    return success();
  }

  @Get("info")
  @AllowAnonymous()
  async getInfo(@Query("token") token: string): Promise<Result> {
    const user = await this.userService.findByToken(token);
    return success(user);
  }

  @Get("logout")
  @AllowAnonymous()
  async logout(@Query("token") _token: string): Promise<Result> {
    return success(null, "logout success");
  }

  @Get("allCount")
  @AllowAnonymous()
  async allCount(): Promise<Result> {
    const count = await this.userService.allCount();
    return success(count);
  }

  @Get("resetPassword")
  @Roles("admin")
  async resetPassword(@Query("userId") userId: string): Promise<Result> {
    await this.userService.resetPassword(userId);
    return success();
  }

  @Get(":id")
  @AllowAnonymous()
  async findOne(@Param("id") id: string): Promise<Result> {
    const user = await this.userService.findOne(id);
    return success(user);
  }

  @Get()
  @AllowAnonymous()
  async findAll(
    @Query("page") page = "1",
    @Query("size") size = "10",
  ): Promise<Result> {
    const p = parseInt(page) || 1;
    const s = parseInt(size) || 10;
    const { list, total } = await this.userService.findAll(p, s);
    return pageResult(list, total, p, s);
  }
}
