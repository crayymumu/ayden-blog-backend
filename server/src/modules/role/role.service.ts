import type { CreateRoleDto, UpdateRoleDto } from './dto/role.dto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRoleDto) {
    return this.prisma.bRole.create({ data: dto })
  }

  async remove(id: number) {
    return this.prisma.bRole.delete({ where: { roleId: id } })
  }

  async update(dto: UpdateRoleDto) {
    const { roleId, ...data } = dto
    return this.prisma.bRole.update({ where: { roleId }, data })
  }

  async findOne(id: number) {
    return this.prisma.bRole.findUnique({
      where: { roleId: id },
      include: { permissions: { include: { permission: true } } },
    })
  }

  async findAll(page: number, size: number) {
    if (page === 0 && size === 0) {
      const list = await this.prisma.bRole.findMany({
        include: { permissions: { include: { permission: true } } },
      })
      return { list, total: list.length }
    }
    const skip = (page - 1) * size
    const [list, total] = await Promise.all([
      this.prisma.bRole.findMany({
        skip,
        take: size,
        include: { permissions: { include: { permission: true } } },
      }),
      this.prisma.bRole.count(),
    ])
    return { list, total }
  }
}
