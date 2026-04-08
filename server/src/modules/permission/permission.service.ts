import type { CreatePermissionDto, UpdatePermissionDto } from './dto/permission.dto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePermissionDto) {
    return this.prisma.bPermission.create({ data: dto })
  }

  async remove(id: number) {
    return this.prisma.bPermission.delete({ where: { permissionId: id } })
  }

  async update(dto: UpdatePermissionDto) {
    const { permissionId, ...data } = dto
    return this.prisma.bPermission.update({ where: { permissionId }, data })
  }

  async findOne(id: number) {
    return this.prisma.bPermission.findUnique({ where: { permissionId: id } })
  }

  async findAll(page: number, size: number) {
    if (page === 0 && size === 0) {
      const list = await this.prisma.bPermission.findMany()
      return { list, total: list.length }
    }
    const skip = (page - 1) * size
    const [list, total] = await Promise.all([
      this.prisma.bPermission.findMany({ skip, take: size }),
      this.prisma.bPermission.count(),
    ])
    return { list, total }
  }
}
