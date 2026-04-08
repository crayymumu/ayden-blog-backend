import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

const PUBLISHED = { blogLevel: 0, blogFlag: 0 }

@Injectable()
export class HomeService {
  constructor(private prisma: PrismaService) {}

  async getIndexCount() {
    const articleCount = await this.prisma.bBlog.count({
      where: PUBLISHED,
    })
    const result = await this.prisma.bBlog.aggregate({
      _sum: { blogReadcount: true },
      where: PUBLISHED,
    })
    return {
      articleCount,
      viewCount: result._sum.blogReadcount ?? 0,
    }
  }

  async getIndexBlog() {
    return this.prisma.bBlog.findMany({
      where: PUBLISHED,
      orderBy: { blogReadcount: 'desc' },
      take: 5,
    })
  }

  async getBlogList(pageIndex = 1, pageSize = 10) {
    const [list, total] = await Promise.all([
      this.prisma.bBlog.findMany({
        where: PUBLISHED,
        select: {
          blogId: true,
          blogTitle: true,
          blogAbstract: true,
          blogReadcount: true,
          blogCreatetime: true,
          tags: { include: { tag: true } },
        },
        orderBy: { blogCreatetime: 'desc' },
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
      }),
      this.prisma.bBlog.count({ where: PUBLISHED }),
    ])
    return { list, total, pageIndex, pageSize }
  }

  async getBlogDetail(blogId: number) {
    await this.prisma.bBlog.update({
      where: { blogId },
      data: { blogReadcount: { increment: 1 } },
    })
    return this.prisma.bBlog.findUnique({
      where: { blogId },
      include: {
        tags: { include: { tag: true } },
        categories: { include: { category: true } },
      },
    })
  }

  async getTagList() {
    return this.prisma.bTag.findMany({
      where: { tagFlag: 0 },
      select: {
        tagId: true,
        tagName: true,
        tagDescription: true,
        _count: { select: { blogs: true } },
      },
    })
  }

  async getHotBlogList(limit = 10) {
    return this.prisma.bBlog.findMany({
      where: PUBLISHED,
      select: { blogId: true, blogTitle: true, blogReadcount: true },
      orderBy: { blogReadcount: 'desc' },
      take: limit,
    })
  }

  async searchBlogs(keyword: string, pageIndex = 1, pageSize = 10) {
    const where = {
      ...PUBLISHED,
      OR: [
        { blogTitle: { contains: keyword } },
        { blogMdcontent: { contains: keyword } },
      ],
    }
    const [list, total] = await Promise.all([
      this.prisma.bBlog.findMany({
        where,
        select: {
          blogId: true,
          blogTitle: true,
          blogAbstract: true,
          blogReadcount: true,
          blogCreatetime: true,
          tags: { include: { tag: true } },
        },
        orderBy: { blogCreatetime: 'desc' },
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
      }),
      this.prisma.bBlog.count({ where }),
    ])
    return { list, total, pageIndex, pageSize }
  }
}
