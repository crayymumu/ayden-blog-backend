import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import {
  CreateBlogCategoryDto,
  UpdateBlogCategoryDto,
} from "./dto/blog-category.dto";

@Injectable()
export class BlogCategoryService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateBlogCategoryDto) {
    return this.prisma.bBlogCategory.create({ data: dto });
  }

  async remove(id: number) {
    return this.prisma.bBlogCategory.delete({ where: { blogCategoryId: id } });
  }

  async update(dto: UpdateBlogCategoryDto) {
    const { blogCategoryId, ...data } = dto;
    return this.prisma.bBlogCategory.update({
      where: { blogCategoryId },
      data,
    });
  }

  async findOne(id: number) {
    return this.prisma.bBlogCategory.findUnique({
      where: { blogCategoryId: id },
    });
  }

  async findAll(pageIndex: number, pageSize: number) {
    const skip = (pageIndex - 1) * pageSize;
    const [list, total] = await Promise.all([
      this.prisma.bBlogCategory.findMany({ skip, take: pageSize }),
      this.prisma.bBlogCategory.count(),
    ]);
    return { list, total };
  }
}
