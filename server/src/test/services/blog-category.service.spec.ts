import { Test, TestingModule } from "@nestjs/testing";
import { BlogCategoryService } from "../../modules/blog-category/blog-category.service";
import { PrismaService } from "../../prisma/prisma.service";
import {
  CreateBlogCategoryDto,
  UpdateBlogCategoryDto,
} from "../../modules/blog-category/dto/blog-category.dto";

const mockPrisma = {
  bBlogCategory: {
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
};

describe("BlogCategoryService", () => {
  let service: BlogCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BlogCategoryService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();
    service = module.get(BlogCategoryService);
    jest.clearAllMocks();
  });

  it("should create", async () => {
    mockPrisma.bBlogCategory.create.mockResolvedValue({ blogCategoryId: 1 });
    const result = await service.create({
      blogId: 1,
      categoryId: 1,
    } as CreateBlogCategoryDto);
    expect(mockPrisma.bBlogCategory.create).toHaveBeenCalled();
    expect(result).toEqual({ blogCategoryId: 1 });
  });

  it("should remove", async () => {
    mockPrisma.bBlogCategory.delete.mockResolvedValue({ blogCategoryId: 1 });
    const result = await service.remove(1);
    expect(mockPrisma.bBlogCategory.delete).toHaveBeenCalledWith({
      where: { blogCategoryId: 1 },
    });
    expect(result).toEqual({ blogCategoryId: 1 });
  });

  it("should update", async () => {
    mockPrisma.bBlogCategory.update.mockResolvedValue({
      blogCategoryId: 1,
      categoryId: 2,
    });
    const result = await service.update({
      blogCategoryId: 1,
      categoryId: 2,
    } as UpdateBlogCategoryDto);
    expect(mockPrisma.bBlogCategory.update).toHaveBeenCalledWith({
      where: { blogCategoryId: 1 },
      data: { categoryId: 2 },
    });
    expect(result).toEqual({ blogCategoryId: 1, categoryId: 2 });
  });

  it("should findOne", async () => {
    mockPrisma.bBlogCategory.findUnique.mockResolvedValue({
      blogCategoryId: 1,
    });
    const result = await service.findOne(1);
    expect(mockPrisma.bBlogCategory.findUnique).toHaveBeenCalledWith({
      where: { blogCategoryId: 1 },
    });
    expect(result).toEqual({ blogCategoryId: 1 });
  });

  it("should findAll", async () => {
    mockPrisma.bBlogCategory.findMany.mockResolvedValue([
      { blogCategoryId: 1 },
    ]);
    mockPrisma.bBlogCategory.count.mockResolvedValue(1);
    const result = await service.findAll(1, 10);
    expect(result).toEqual({ list: [{ blogCategoryId: 1 }], total: 1 });
  });
});
