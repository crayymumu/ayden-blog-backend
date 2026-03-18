import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateBlogTagDto, UpdateBlogTagDto } from "./dto/blog-tag.dto";

@Injectable()
export class BlogTagService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateBlogTagDto) {
    return this.prisma.bBlogTag.create({ data: dto });
  }

  async remove(id: number) {
    return this.prisma.bBlogTag.delete({ where: { blogTagId: id } });
  }

  async update(dto: UpdateBlogTagDto) {
    const { blogTagId, ...data } = dto;
    return this.prisma.bBlogTag.update({ where: { blogTagId }, data });
  }

  async findOne(id: number) {
    return this.prisma.bBlogTag.findUnique({ where: { blogTagId: id } });
  }

  async findAll(pageIndex: number, pageSize: number) {
    const skip = (pageIndex - 1) * pageSize;
    const [list, total] = await Promise.all([
      this.prisma.bBlogTag.findMany({ skip, take: pageSize }),
      this.prisma.bBlogTag.count(),
    ]);
    return { list, total };
  }
}
