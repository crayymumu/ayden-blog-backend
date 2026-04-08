import type { Result } from '../../common/interfaces/result.interface'
import type { CreateUserRoleDto, UpdateUserRoleDto } from './dto/user-role.dto'
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
  Req,
} from '@nestjs/common'
import { AllowAnonymous } from '@thallesp/nestjs-better-auth'
import { pageResult, success } from '../../common/helpers/result.helper'
import { UserRoleService } from './user-role.service'

@Controller('user/role')
@AllowAnonymous()
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Get('my-permissions')
  async myPermissions(@Req() req: any): Promise<Result> {
    const userId = req.session?.user?.id
    if (!userId)
      return success({ roles: [], permissions: [] })
    const data = await this.userRoleService.getMyPermissions(userId)
    return success(data)
  }

  @Post()
  async create(@Body() dto: CreateUserRoleDto): Promise<Result> {
    await this.userRoleService.create(dto)
    return success()
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    await this.userRoleService.remove(id)
    return success()
  }

  @Put()
  async update(@Body() dto: UpdateUserRoleDto): Promise<Result> {
    await this.userRoleService.update(dto)
    return success()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    const data = await this.userRoleService.findOne(id)
    return success(data)
  }

  @Get()
  async findAll(
    @Query('pageIndex') pageIndex = '1',
    @Query('pageSize') pageSize = '10',
  ): Promise<Result> {
    const pi = Number.parseInt(pageIndex) || 1
    const ps = Number.parseInt(pageSize) || 10
    const { list, total } = await this.userRoleService.findAll(pi, ps)
    return pageResult(list, total, pi, ps)
  }
}
