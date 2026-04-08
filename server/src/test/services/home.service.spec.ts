import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { HomeService } from '../../home/home.service'
import { PrismaService } from '../../prisma/prisma.service'

const mockPrismaService = {
  bBlog: {
    count: jest.fn(),
    aggregate: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
  },
  bTag: {
    findMany: jest.fn(),
  },
}

describe('homeService', () => {
  let service: HomeService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HomeService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile()
    service = module.get(HomeService)
    jest.clearAllMocks()
  })

  it('getIndexCount', async () => {
    mockPrismaService.bBlog.count.mockResolvedValue(5)
    mockPrismaService.bBlog.aggregate.mockResolvedValue({
      _sum: { blogReadcount: 100 },
    })
    const result = await service.getIndexCount()
    expect(result).toEqual({ articleCount: 5, viewCount: 100 })
  })

  it('getIndexBlog', async () => {
    mockPrismaService.bBlog.findMany.mockResolvedValue([{ blogId: 1 }])
    const result = await service.getIndexBlog()
    expect(result).toEqual([{ blogId: 1 }])
  })

  it('getBlogList', async () => {
    const blogs = [{ blogId: 1, blogTitle: 'test' }]
    mockPrismaService.bBlog.findMany.mockResolvedValue(blogs)
    mockPrismaService.bBlog.count.mockResolvedValue(1)
    const result = await service.getBlogList(1, 10)
    expect(result).toEqual({
      list: blogs,
      total: 1,
      pageIndex: 1,
      pageSize: 10,
    })
  })

  it('getBlogDetail', async () => {
    const blog = { blogId: 1, blogTitle: 'test' }
    mockPrismaService.bBlog.update.mockResolvedValue(blog)
    mockPrismaService.bBlog.findUnique.mockResolvedValue(blog)
    const result = await service.getBlogDetail(1)
    expect(result).toEqual(blog)
    expect(mockPrismaService.bBlog.update).toHaveBeenCalled()
  })

  it('getTagList', async () => {
    const tags = [{ tagId: 1, tagName: 'js' }]
    mockPrismaService.bTag.findMany.mockResolvedValue(tags)
    const result = await service.getTagList()
    expect(result).toEqual(tags)
  })

  it('getHotBlogList', async () => {
    const blogs = [{ blogId: 1, blogTitle: 'hot' }]
    mockPrismaService.bBlog.findMany.mockResolvedValue(blogs)
    const result = await service.getHotBlogList(5)
    expect(result).toEqual(blogs)
  })

  it('searchBlogs', async () => {
    const blogs = [{ blogId: 1, blogTitle: 'keyword' }]
    mockPrismaService.bBlog.findMany.mockResolvedValue(blogs)
    mockPrismaService.bBlog.count.mockResolvedValue(1)
    const result = await service.searchBlogs('keyword', 1, 10)
    expect(result).toEqual({
      list: blogs,
      total: 1,
      pageIndex: 1,
      pageSize: 10,
    })
  })
})
