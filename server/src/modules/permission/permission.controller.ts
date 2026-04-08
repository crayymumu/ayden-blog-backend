import type { Result } from '../../common/interfaces/result.interface'
import type { CreatePermissionDto, UpdatePermissionDto } from './dto/permission.dto'
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
import { PermissionService } from './permission.service'

@Controller('permission')
@AllowAnonymous()
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  async create(@Body() dto: CreatePermissionDto): Promise<Result> {
    await this.permissionService.create(dto)
    return success()
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    await this.permissionService.remove(id)
    return success()
  }

  @Put()
  async update(@Body() dto: UpdatePermissionDto): Promise<Result> {
    await this.permissionService.update(dto)
    return success()
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Result> {
    const data = await this.permissionService.findOne(id)
    return success(data)
  }

  @Get()
  async findAll(
    @Query('page') page = '0',
    @Query('size') size = '0',
  ): Promise<Result> {
    const p = Number.parseInt(page)
    const s = Number.parseInt(size)
    const { list, total } = await this.permissionService.findAll(p, s)
    if (p === 0 && s === 0)
      return success(list)
    return pageResult(list, total, p, s)
  }
}
