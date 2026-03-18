import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateUserRoleDto, UpdateUserRoleDto } from "./dto/user-role.dto";

@Injectable()
export class UserRoleService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserRoleDto) {
    return this.prisma.bUserRole.create({ data: dto });
  }

  async remove(id: number) {
    return this.prisma.bUserRole.delete({ where: { userRoleId: id } });
  }

  async update(dto: UpdateUserRoleDto) {
    const { userRoleId, ...data } = dto;
    return this.prisma.bUserRole.update({ where: { userRoleId }, data });
  }

  async findOne(id: number) {
    return this.prisma.bUserRole.findUnique({ where: { userRoleId: id } });
  }

  async findAll(pageIndex: number, pageSize: number) {
    const skip = (pageIndex - 1) * pageSize;
    const [list, total] = await Promise.all([
      this.prisma.bUserRole.findMany({ skip, take: pageSize }),
      this.prisma.bUserRole.count(),
    ]);
    return { list, total };
  }
}
