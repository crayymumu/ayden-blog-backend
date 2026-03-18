import { Test, TestingModule } from "@nestjs/testing";
import { BlogService } from "../../modules/blog/blog.service";
import { PrismaService } from "../../prisma/prisma.service";

const mockPrismaService = {
  bBlog: {
    create: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
  bBlogTag: {
    createMany: jest.fn(),
    deleteMany: jest.fn(),
    findMany: jest.fn(),
  },
  bBlogCategory: {
    createMany: jest.fn(),
    deleteMany: jest.fn(),
  },
  $queryRaw: jest.fn(),
};

describe("BlogService", () => {
  let service: BlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BlogService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();
    service = module.get(BlogService);
    jest.clearAllMocks();
  });

  it("create", async () => {
    mockPrismaService.bBlog.create.mockResolvedValue({ blogId: 1 });
    mockPrismaService.bBlogTag.createMany.mockResolvedValue({ count: 1 });
    mockPrismaService.bBlogCategory.createMany.mockResolvedValue({ count: 1 });
    const result = await service.create({
      blogTitle: "test",
      tagChoose: [1],
      categoryChoose: [2],
    });
    expect(result).toEqual({ blogId: 1 });
    expect(mockPrismaService.bBlogTag.createMany).toHaveBeenCalled();
    expect(mockPrismaService.bBlogCategory.createMany).toHaveBeenCalled();
  });

  it("create without tags/categories", async () => {
    mockPrismaService.bBlog.create.mockResolvedValue({ blogId: 2 });
    const result = await service.create({ blogTitle: "test2" });
    expect(result).toEqual({ blogId: 2 });
    expect(mockPrismaService.bBlogTag.createMany).not.toHaveBeenCalled();
  });

  it("remove", async () => {
    mockPrismaService.bBlog.update.mockResolvedValue({});
    await service.remove(1);
    expect(mockPrismaService.bBlog.update).toHaveBeenCalledWith({
      where: { blogId: 1 },
      data: { blogFlag: 2 },
    });
  });

  it("update", async () => {
    mockPrismaService.bBlog.update.mockResolvedValue({});
    mockPrismaService.bBlogTag.deleteMany.mockResolvedValue({});
    mockPrismaService.bBlogTag.createMany.mockResolvedValue({ count: 1 });
    mockPrismaService.bBlogCategory.deleteMany.mockResolvedValue({});
    mockPrismaService.bBlogCategory.createMany.mockResolvedValue({ count: 1 });
    await service.update({
      blogId: 1,
      blogTitle: "updated",
      tagChoose: [3],
      categoryChoose: [4],
    });
    expect(mockPrismaService.bBlog.update).toHaveBeenCalled();
    expect(mockPrismaService.bBlogTag.deleteMany).toHaveBeenCalledWith({
      where: { blogId: 1 },
    });
    expect(mockPrismaService.bBlogCategory.deleteMany).toHaveBeenCalledWith({
      where: { blogId: 1 },
    });
  });

  it("findOne", async () => {
    const blog = { blogId: 1, blogTitle: "test" };
    mockPrismaService.bBlog.findUnique.mockResolvedValue(blog);
    const result = await service.findOne(1);
    expect(result).toEqual(blog);
  });

  it("findOneAndRecord", async () => {
    mockPrismaService.bBlog.update.mockResolvedValue({});
    mockPrismaService.bBlog.findUnique.mockResolvedValue({ blogId: 1 });
    const result = await service.findOneAndRecord(1);
    expect(result).toEqual({ blogId: 1 });
    expect(mockPrismaService.bBlog.update).toHaveBeenCalledWith({
      where: { blogId: 1 },
      data: { blogReadcount: { increment: 1 } },
    });
  });

  it("blogList", async () => {
    mockPrismaService.bBlog.findMany.mockResolvedValue([{ blogId: 1 }]);
    mockPrismaService.bBlog.count.mockResolvedValue(1);
    const result = await service.blogList({ pageIndex: 1, pageSize: 10 });
    expect(result).toEqual({
      list: [{ blogId: 1 }],
      total: 1,
      pageNum: 1,
      pageSize: 10,
    });
  });

  it("blogListIndex", async () => {
    mockPrismaService.bBlog.findMany.mockResolvedValue([]);
    mockPrismaService.bBlog.count.mockResolvedValue(0);
    const result = await service.blogListIndex({ pageIndex: 1, pageSize: 5 });
    expect(result.pageNum).toBe(1);
  });

  it("fuzzySearch", async () => {
    mockPrismaService.bBlog.findMany.mockResolvedValue([{ blogId: 1 }]);
    mockPrismaService.bBlog.count.mockResolvedValue(1);
    const result = await service.fuzzySearch("test", 1);
    expect(result).toEqual({
      list: [{ blogId: 1 }],
      total: 1,
      pageNum: 1,
      pageSize: 10,
    });
  });

  it("saveTemp", async () => {
    mockPrismaService.bBlog.create.mockResolvedValue({ blogId: 10 });
    const result = await service.saveTemp({ blogTitle: "temp" });
    expect(result).toEqual({ blogId: 10 });
  });

  it("selectPlaceOnFile", async () => {
    mockPrismaService.$queryRaw.mockResolvedValue([
      { fileDate: "2024-01-01", blogCount: BigInt(3) },
    ]);
    const result = await service.selectPlaceOnFile();
    expect(result).toEqual([{ fileDate: "2024-01-01", blogCount: 3 }]);
  });

  it("selectBlogByTagId", async () => {
    mockPrismaService.bBlogTag.findMany.mockResolvedValue([
      { blog: { blogId: 1 } },
      { blog: null },
    ]);
    const result = await service.selectBlogByTagId(1);
    expect(result).toEqual([{ blogId: 1 }]);
  });

  it("selectBlogByDate", async () => {
    mockPrismaService.$queryRaw.mockResolvedValue([{ blogId: 1 }]);
    const result = await service.selectBlogByDate("2024-01");
    expect(result).toEqual([{ blogId: 1 }]);
  });

  it("topRead", async () => {
    mockPrismaService.bBlog.findMany.mockResolvedValue([
      { blogId: 1, blogReadcount: 100 },
    ]);
    const result = await service.topRead(5);
    expect(result).toEqual([{ blogId: 1, blogReadcount: 100 }]);
  });
});
