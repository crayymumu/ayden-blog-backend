import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { UpdateUserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; email: string; nickname?: string }) {
    return this.prisma.bUser.create({
      data: {
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        nickname: data.nickname,
        emailVerified: false,
        updatedAt: new Date(),
      },
    });
  }

  async remove(id: string) {
    return this.prisma.bUser.delete({ where: { id } });
  }

  async update(dto: UpdateUserDto) {
    const { id, ...data } = dto;
    return this.prisma.bUser.update({ where: { id }, data });
  }

  async findOne(id: string) {
    return this.prisma.bUser.findUnique({ where: { id } });
  }

  async findAll(page: number, size: number) {
    const skip = (page - 1) * size;
    const [list, total] = await Promise.all([
      this.prisma.bUser.findMany({
        skip,
        take: size,
        orderBy: { createdAt: "desc" },
      }),
      this.prisma.bUser.count(),
    ]);
    return { list, total };
  }

  async findByToken(token: string) {
    const session = await this.prisma.bSession.findUnique({
      where: { token },
      include: { user: true },
    });
    return session?.user ?? null;
  }

  async allCount() {
    return this.prisma.bUser.count();
  }

  async resetPassword(userId: string) {
    return this.prisma.bAccount.updateMany({
      where: { userId, providerId: "credential" },
      data: { password: null },
    });
  }
}
