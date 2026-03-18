import { Test, TestingModule } from "@nestjs/testing";
import { BlogTagService } from "../../blog-tag/blog-tag.service";
import { PrismaService } from "../../prisma/prisma.service";

const mockPrisma = {
  bBlogTag: {
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
};

describe("BlogTagService", () => {
  let service: BlogTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BlogTagService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();
    service = module.get(BlogTagService);
    jest.clearAllMocks();
  });

  it("create", async () => {
    mockPrisma.bBlogTag.create.mockResolvedValue({ blogTagId: 1 });
    const result = await service.create({ blogId: 1, tagId: 2 });
    expect(result).toEqual({ blogTagId: 1 });
  });

  it("remove", async () => {
    mockPrisma.bBlogTag.delete.mockResolvedValue({});
    await service.remove(1);
    expect(mockPrisma.bBlogTag.delete).toHaveBeenCalledWith({
      where: { blogTagId: 1 },
    });
  });

  it("update", async () => {
    mockPrisma.bBlogTag.update.mockResolvedValue({});
    await service.update({ blogTagId: 1, blogId: 2, tagId: 3 });
    expect(mockPrisma.bBlogTag.update).toHaveBeenCalledWith({
      where: { blogTagId: 1 },
      data: { blogId: 2, tagId: 3 },
    });
  });

  it("findOne", async () => {
    const item = { blogTagId: 1, blogId: 1, tagId: 2 };
    mockPrisma.bBlogTag.findUnique.mockResolvedValue(item);
    const result = await service.findOne(1);
    expect(result).toEqual(item);
  });

  it("findAll", async () => {
    mockPrisma.bBlogTag.findMany.mockResolvedValue([{ blogTagId: 1 }]);
    mockPrisma.bBlogTag.count.mockResolvedValue(1);
    const result = await service.findAll(1, 10);
    expect(result).toEqual({ list: [{ blogTagId: 1 }], total: 1 });
  });
});
