import type { CreateUserRoleDto, UpdateUserRoleDto } from './dto/user-role.dto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class UserRoleService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserRoleDto) {
    return this.prisma.bUserRole.create({ data: dto })
  }

  async remove(id: number) {
    return this.prisma.bUserRole.delete({ where: { userRoleId: id } })
  }

  async update(dto: UpdateUserRoleDto) {
    const { userRoleId, ...data } = dto
    return this.prisma.bUserRole.update({ where: { userRoleId }, data })
  }

  async findOne(id: number) {
    return this.prisma.bUserRole.findUnique({ where: { userRoleId: id } })
  }

  async getMyPermissions(userId: string) {
    const userRoles = await this.prisma.bUserRole.findMany({
      where: { userId },
      include: {
        role: {
          include: {
            permissions: {
              include: { permission: true },
            },
          },
        },
      },
    })
    const roles = userRoles
      .map(ur => ur.role?.role)
      .filter(Boolean) as string[]
    const permissions = [
      ...new Set(
        userRoles.flatMap(
          ur =>
            ur.role?.permissions
              ?.map(rp => rp.permission?.permission)
              .filter(Boolean) ?? [],
        ),
      ),
    ] as string[]
    return { roles, permissions }
  }

  async findAll(pageIndex: number, pageSize: number) {
    const skip = (pageIndex - 1) * pageSize
    const [list, total] = await Promise.all([
      this.prisma.bUserRole.findMany({ skip, take: pageSize }),
      this.prisma.bUserRole.count(),
    ])
    return { list, total }
  }
}
