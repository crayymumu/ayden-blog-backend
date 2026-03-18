import { Test, TestingModule } from "@nestjs/testing";
import { TagService } from "../../tag/tag.service";
import { PrismaService } from "../../prisma/prisma.service";

const mockPrisma = {
  bTag: {
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
    deleteMany: jest.fn(),
  },
  bBlogTag: {
    count: jest.fn(),
  },
};

describe("TagService", () => {
  let service: TagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagService, { provide: PrismaService, useValue: mockPrisma }],
    }).compile();
    service = module.get(TagService);
    jest.clearAllMocks();
  });

  it("create", async () => {
    mockPrisma.bTag.create.mockResolvedValue({ tagId: 1 });
    const result = await service.create({ tagName: "test" });
    expect(result).toEqual({ tagId: 1 });
  });

  it("remove", async () => {
    mockPrisma.bTag.delete.mockResolvedValue({ tagId: 1 });
    const result = await service.remove(1);
    expect(result).toEqual({ tagId: 1 });
    expect(mockPrisma.bTag.delete).toHaveBeenCalledWith({
      where: { tagId: 1 },
    });
  });

  it("update", async () => {
    mockPrisma.bTag.update.mockResolvedValue({ tagId: 1, tagName: "updated" });
    const result = await service.update({ tagId: 1, tagName: "updated" });
    expect(result).toEqual({ tagId: 1, tagName: "updated" });
  });

  it("findOne", async () => {
    mockPrisma.bTag.findUnique.mockResolvedValue({ tagId: 1 });
    const result = await service.findOne(1);
    expect(result).toEqual({ tagId: 1 });
    expect(mockPrisma.bTag.findUnique).toHaveBeenCalledWith({
      where: { tagId: 1 },
    });
  });

  it("list", async () => {
    mockPrisma.bTag.findMany.mockResolvedValue([{ tagId: 1 }]);
    mockPrisma.bTag.count.mockResolvedValue(1);
    const result = await service.list({ pageIndex: 1, pageSize: 10 });
    expect(result).toEqual({
      list: [{ tagId: 1 }],
      total: 1,
      pageNum: 1,
      pageSize: 10,
    });
  });

  it("list with tagName filter", async () => {
    mockPrisma.bTag.findMany.mockResolvedValue([]);
    mockPrisma.bTag.count.mockResolvedValue(0);
    const result = await service.list({ tagName: "test" });
    expect(result.list).toEqual([]);
    expect(mockPrisma.bTag.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { tagName: { contains: "test" } } }),
    );
  });

  it("deleteByIds", async () => {
    mockPrisma.bTag.deleteMany.mockResolvedValue({ count: 2 });
    const result = await service.deleteByIds([1, 2]);
    expect(result).toEqual({ count: 2 });
    expect(mockPrisma.bTag.deleteMany).toHaveBeenCalledWith({
      where: { tagId: { in: [1, 2] } },
    });
  });

  it("getAllTag", async () => {
    mockPrisma.bTag.findMany.mockResolvedValue([{ tagId: 1 }, { tagId: 2 }]);
    mockPrisma.bBlogTag.count.mockResolvedValueOnce(3).mockResolvedValueOnce(5);
    const result = await service.getAllTag();
    expect(result).toEqual([
      { tagId: 1, usedBy: 3 },
      { tagId: 2, usedBy: 5 },
    ]);
  });
});
