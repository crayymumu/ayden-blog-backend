import type { TestingModule } from '@nestjs/testing'
import type {
  CreateBlogCategoryDto,
  UpdateBlogCategoryDto,
} from '../../modules/blog-category/dto/blog-category.dto'
import { Test } from '@nestjs/testing'
import { BlogCategoryController } from '../../modules/blog-category/blog-category.controller'
import { BlogCategoryService } from '../../modules/blog-category/blog-category.service'

const mockService = {
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  findAll: jest.fn(),
}

describe('blogCategoryController', () => {
  let controller: BlogCategoryController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogCategoryController],
      providers: [{ provide: BlogCategoryService, useValue: mockService }],
    }).compile()
    controller = module.get(BlogCategoryController)
    jest.clearAllMocks()
  })

  it('should create', async () => {
    mockService.create.mockResolvedValue({ blogCategoryId: 1 })
    const result = await controller.create({
      blogId: 1,
      categoryId: 1,
    } as CreateBlogCategoryDto)
    expect(result.code).toBe(200)
  })

  it('should remove', async () => {
    mockService.remove.mockResolvedValue({ blogCategoryId: 1 })
    const result = await controller.remove(1)
    expect(result.code).toBe(200)
  })

  it('should update', async () => {
    mockService.update.mockResolvedValue({ blogCategoryId: 1 })
    const result = await controller.update({
      blogCategoryId: 1,
    } as UpdateBlogCategoryDto)
    expect(result.code).toBe(200)
  })

  it('should findOne', async () => {
    mockService.findOne.mockResolvedValue({ blogCategoryId: 1 })
    const result = await controller.findOne(1)
    expect(result.code).toBe(200)
    expect(result.data).toEqual({ blogCategoryId: 1 })
  })

  it('should findAll', async () => {
    mockService.findAll.mockResolvedValue({
      list: [{ blogCategoryId: 1 }],
      total: 1,
    })
    const result = await controller.findAll('1', '10')
    expect(result.code).toBe(200)
    expect(result.data).toHaveProperty('list')
    expect(result.data).toHaveProperty('total')
  })
})
