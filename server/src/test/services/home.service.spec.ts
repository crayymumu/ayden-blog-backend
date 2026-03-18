import { Test, TestingModule } from "@nestjs/testing";
import { HomeService } from "../../home/home.service";
import { PrismaService } from "../../prisma/prisma.service";

const mockPrismaService = {
  bBlog: {
    count: jest.fn(),
    aggregate: jest.fn(),
    findMany: jest.fn(),
  },
};

describe("HomeService", () => {
  let service: HomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HomeService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();
    service = module.get(HomeService);
    jest.clearAllMocks();
  });

  it("getIndexCount", async () => {
    mockPrismaService.bBlog.count.mockResolvedValue(5);
    mockPrismaService.bBlog.aggregate.mockResolvedValue({
      _sum: { blogReadcount: 100 },
    });
    const result = await service.getIndexCount();
    expect(result).toEqual({ articleCount: 5, viewCount: 100 });
  });

  it("getIndexBlog", async () => {
    mockPrismaService.bBlog.findMany.mockResolvedValue([{ blogId: 1 }]);
    const result = await service.getIndexBlog();
    expect(result).toEqual([{ blogId: 1 }]);
  });
});
