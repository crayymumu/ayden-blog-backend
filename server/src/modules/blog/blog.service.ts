import type { Prisma } from '@prisma/client'
import type { BlogListDto, CreateBlogDto, UpdateBlogDto } from './dto/blog.dto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateBlogDto) {
    const { tagChoose, categoryChoose, ...blogData } = dto
    const blog = await this.prisma.bBlog.create({
      data: {
        ...blogData,
        blogCreatetime: new Date(),
        blogUpdatetime: new Date(),
      },
    })
    if (tagChoose?.length) {
      await this.prisma.bBlogTag.createMany({
        data: tagChoose.map(tagId => ({ blogId: blog.blogId, tagId })),
      })
    }
    if (categoryChoose?.length) {
      await this.prisma.bBlogCategory.createMany({
        data: categoryChoose.map(categoryId => ({
          blogId: blog.blogId,
          categoryId,
        })),
      })
    }
    return blog
  }

  async remove(id: number) {
    return this.prisma.bBlog.update({
      where: { blogId: id },
      data: { blogFlag: 2 },
    })
  }

  async update(dto: UpdateBlogDto) {
    const { blogId, tagChoose, categoryChoose, ...data } = dto
    await this.prisma.bBlog.update({
      where: { blogId },
      data: { ...data, blogUpdatetime: new Date() },
    })
    if (tagChoose) {
      await this.prisma.bBlogTag.deleteMany({ where: { blogId } })
      if (tagChoose.length) {
        await this.prisma.bBlogTag.createMany({
          data: tagChoose.map(tagId => ({ blogId, tagId })),
        })
      }
    }
    if (categoryChoose) {
      await this.prisma.bBlogCategory.deleteMany({ where: { blogId } })
      if (categoryChoose.length) {
        await this.prisma.bBlogCategory.createMany({
          data: categoryChoose.map(categoryId => ({ blogId, categoryId })),
        })
      }
    }
  }

  async findOne(id: number) {
    return this.prisma.bBlog.findUnique({
      where: { blogId: id },
      include: {
        tags: { include: { tag: true } },
        categories: { include: { category: true } },
      },
    })
  }

  async findOneAndRecord(id: number) {
    await this.prisma.bBlog.update({
      where: { blogId: id },
      data: { blogReadcount: { increment: 1 } },
    })
    return this.findOne(id)
  }

  async blogList(dto: BlogListDto) {
    const pageSize = dto.pageSize ?? 10
    const pageIndex = dto.pageIndex ?? 1
    const where: Prisma.BBlogWhereInput = { blogFlag: { not: 2 } }
    if (dto.blogLevel !== undefined)
      where.blogLevel = dto.blogLevel
    if (dto.blogFlag !== undefined)
      where.blogFlag = dto.blogFlag

    const [list, total] = await Promise.all([
      this.prisma.bBlog.findMany({
        where,
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
        orderBy: { blogCreatetime: 'desc' },
        include: {
          tags: { include: { tag: true } },
          categories: { include: { category: true } },
        },
      }),
      this.prisma.bBlog.count({ where }),
    ])
    return { list, total, pageNum: pageIndex, pageSize }
  }

  async blogListIndex(dto: BlogListDto) {
    return this.blogList({ ...dto, blogLevel: 0, blogFlag: 0 })
  }

  async fuzzySearch(searchText: string, pageIndex: number) {
    const pageSize = 10
    const where: Prisma.BBlogWhereInput = {
      blogFlag: 0,
      blogLevel: 0,
      OR: [
        { blogTitle: { contains: searchText } },
        { blogContent: { contains: searchText } },
      ],
    }
    const [list, total] = await Promise.all([
      this.prisma.bBlog.findMany({
        where,
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
        orderBy: { blogCreatetime: 'desc' },
      }),
      this.prisma.bBlog.count({ where }),
    ])
    return { list, total, pageNum: pageIndex, pageSize }
  }

  async saveTemp(dto: CreateBlogDto) {
    const {
      tagChoose: _tagChoose,
      categoryChoose: _categoryChoose,
      ...data
    } = dto
    return this.prisma.bBlog.create({
      data: {
        ...data,
        blogFlag: 1,
        blogCreatetime: new Date(),
        blogUpdatetime: new Date(),
      },
    })
  }

  async selectPlaceOnFile() {
    const results = await this.prisma.$queryRaw<
      { fileDate: string, blogCount: bigint }[]
    >`SELECT to_char("blog_createTime", 'YYYY-MM') || '-01' as "fileDate", COUNT(*) as "blogCount" FROM "b_blog" WHERE "blog_level" = 0 AND "blog_flag" = 0 GROUP BY "fileDate" ORDER BY "fileDate" DESC`
    return results.map(r => ({
      fileDate: r.fileDate,
      blogCount: Number(r.blogCount),
    }))
  }

  async selectBlogByTagId(tagId: number) {
    const blogTags = await this.prisma.bBlogTag.findMany({
      where: { tagId },
      include: { blog: true },
    })
    return blogTags.map(bt => bt.blog).filter(Boolean)
  }

  async selectBlogByDate(createDate: string) {
    const results = await this.prisma.$queryRaw<any[]>`
      SELECT * FROM "b_blog"
      WHERE to_char("blog_createTime", 'YYYY-MM') = ${createDate}
      AND "blog_level" = 0 AND "blog_flag" = 0
      ORDER BY "blog_createTime" DESC`
    return results as Record<string, unknown>[]
  }

  async topRead(count = 5) {
    return this.prisma.bBlog.findMany({
      where: { blogLevel: 0, blogFlag: 0 },
      orderBy: { blogReadcount: 'desc' },
      take: count,
    })
  }
}
