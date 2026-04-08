import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { CategoryService } from '../../modules/category/category.service'
import { PrismaService } from '../../prisma/prisma.service'

const mockPrisma = {
  bCategory: {
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
    deleteMany: jest.fn(),
  },
}

describe('categoryService', () => {
  let service: CategoryService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile()
    service = module.get(CategoryService)
    jest.clearAllMocks()
  })

  it('create', async () => {
    mockPrisma.bCategory.create.mockResolvedValue({ categoryId: 1 })
    const result = await service.create({ categoryName: 'test' })
    expect(result).toEqual({ categoryId: 1 })
    expect(mockPrisma.bCategory.create).toHaveBeenCalled()
  })

  it('remove', async () => {
    mockPrisma.bCategory.delete.mockResolvedValue({ categoryId: 1 })
    const result = await service.remove(1)
    expect(result).toEqual({ categoryId: 1 })
    expect(mockPrisma.bCategory.delete).toHaveBeenCalledWith({
      where: { categoryId: 1 },
    })
  })

  it('update', async () => {
    mockPrisma.bCategory.update.mockResolvedValue({
      categoryId: 1,
      categoryName: 'updated',
    })
    const result = await service.update({
      categoryId: 1,
      categoryName: 'updated',
    })
    expect(result).toEqual({ categoryId: 1, categoryName: 'updated' })
  })

  it('findOne', async () => {
    mockPrisma.bCategory.findUnique.mockResolvedValue({ categoryId: 1 })
    const result = await service.findOne(1)
    expect(result).toEqual({ categoryId: 1 })
    expect(mockPrisma.bCategory.findUnique).toHaveBeenCalledWith({
      where: { categoryId: 1 },
    })
  })

  it('list', async () => {
    mockPrisma.bCategory.findMany.mockResolvedValue([{ categoryId: 1 }])
    mockPrisma.bCategory.count.mockResolvedValue(1)
    const result = await service.list({ pageIndex: 1, pageSize: 10 })
    expect(result).toEqual({
      list: [{ categoryId: 1 }],
      total: 1,
      pageNum: 1,
      pageSize: 10,
    })
  })

  it('list with categoryName filter', async () => {
    mockPrisma.bCategory.findMany.mockResolvedValue([])
    mockPrisma.bCategory.count.mockResolvedValue(0)
    const result = await service.list({ categoryName: 'test' })
    expect(result.list).toEqual([])
    expect(mockPrisma.bCategory.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { categoryName: { contains: 'test' } },
      }),
    )
  })

  it('deleteByIds', async () => {
    mockPrisma.bCategory.deleteMany.mockResolvedValue({ count: 2 })
    const result = await service.deleteByIds([1, 2])
    expect(result).toEqual({ count: 2 })
    expect(mockPrisma.bCategory.deleteMany).toHaveBeenCalledWith({
      where: { categoryId: { in: [1, 2] } },
    })
  })
})
