import { Test, TestingModule } from "@nestjs/testing";
import { CommentService } from "../../modules/comment/comment.service";
import { PrismaService } from "../../prisma/prisma.service";

const mockPrisma = {
  bComment: {
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
  bReply: {
    findMany: jest.fn(),
    count: jest.fn(),
  },
};

describe("CommentService", () => {
  let service: CommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();
    service = module.get(CommentService);
    jest.clearAllMocks();
  });

  it("create", async () => {
    mockPrisma.bComment.create.mockResolvedValue({ commentId: 1 });
    const result = await service.create({ blogId: 1, content: "test" });
    expect(result).toEqual({ commentId: 1 });
  });

  it("remove", async () => {
    mockPrisma.bComment.delete.mockResolvedValue({ commentId: 1 });
    const result = await service.remove(1);
    expect(result).toEqual({ commentId: 1 });
    expect(mockPrisma.bComment.delete).toHaveBeenCalledWith({
      where: { commentId: 1 },
    });
  });

  it("update", async () => {
    mockPrisma.bComment.update.mockResolvedValue({
      commentId: 1,
      content: "updated",
    });
    const result = await service.update({ commentId: 1, content: "updated" });
    expect(result).toEqual({ commentId: 1, content: "updated" });
  });

  it("findOne", async () => {
    mockPrisma.bComment.findUnique.mockResolvedValue({ commentId: 1 });
    const result = await service.findOne(1);
    expect(result).toEqual({ commentId: 1 });
    expect(mockPrisma.bComment.findUnique).toHaveBeenCalledWith({
      where: { commentId: 1 },
    });
  });

  it("allComment", async () => {
    mockPrisma.bComment.findMany.mockResolvedValue([{ commentId: 1 }]);
    mockPrisma.bComment.count.mockResolvedValue(1);
    const result = await service.allComment({ pageIndex: 1, pageSize: 10 });
    expect(result).toEqual({
      list: [{ commentId: 1 }],
      total: 1,
      pageNum: 1,
      pageSize: 10,
    });
  });

  it("allComment with blogId filter", async () => {
    mockPrisma.bComment.findMany.mockResolvedValue([]);
    mockPrisma.bComment.count.mockResolvedValue(0);
    const result = await service.allComment({
      blogId: 5,
      pageIndex: 1,
      pageSize: 10,
    });
    expect(result.list).toEqual([]);
    expect(mockPrisma.bComment.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { blogId: 5 } }),
    );
  });

  it("allReply", async () => {
    mockPrisma.bReply.findMany.mockResolvedValue([{ replyId: 1 }]);
    mockPrisma.bReply.count.mockResolvedValue(1);
    const result = await service.allReply({
      commentId: 1,
      pageIndex: 1,
      pageSize: 10,
    });
    expect(result).toEqual({
      list: [{ replyId: 1 }],
      total: 1,
      pageNum: 1,
      pageSize: 10,
    });
  });
});
