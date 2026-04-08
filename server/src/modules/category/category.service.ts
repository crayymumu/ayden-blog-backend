import type { Prisma } from '@prisma/client'
import type {
  CategoryListDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from './dto/category.dto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCategoryDto) {
    return this.prisma.bCategory.create({
      data: { ...dto, categoryTime: new Date() },
    })
  }

  async remove(id: number) {
    return this.prisma.bCategory.delete({ where: { categoryId: id } })
  }

  async update(dto: UpdateCategoryDto) {
    const { categoryId, ...data } = dto
    return this.prisma.bCategory.update({ where: { categoryId }, data })
  }

  async findOne(id: number) {
    return this.prisma.bCategory.findUnique({ where: { categoryId: id } })
  }

  async list(dto: CategoryListDto) {
    const pageSize = dto.pageSize ?? 10
    const pageIndex = dto.pageIndex ?? 1
    const where: Prisma.BCategoryWhereInput = {}
    if (dto.categoryName)
      where.categoryName = { contains: dto.categoryName }

    const [list, total] = await Promise.all([
      this.prisma.bCategory.findMany({
        where,
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
      }),
      this.prisma.bCategory.count({ where }),
    ])
    return { list, total, pageNum: pageIndex, pageSize }
  }

  async deleteByIds(ids: number[]) {
    return this.prisma.bCategory.deleteMany({
      where: { categoryId: { in: ids } },
    })
  }
}
