import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class HomeService {
  constructor(private prisma: PrismaService) {}

  async getIndexCount(): Promise<{ articleCount: number; viewCount: number }> {
    const articleCount = await this.prisma.bBlog.count({
      where: { blogLevel: 0, blogFlag: 0 },
    });
    const result = await this.prisma.bBlog.aggregate({
      _sum: { blogReadcount: true },
      where: { blogLevel: 0, blogFlag: 0 },
    });
    return {
      articleCount,
      viewCount: result._sum.blogReadcount ?? 0,
    };
  }

  async getIndexBlog() {
    return this.prisma.bBlog.findMany({
      where: { blogLevel: 0, blogFlag: 0 },
      orderBy: { blogReadcount: "desc" },
      take: 5,
    });
  }
}
