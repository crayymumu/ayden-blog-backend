import { Test, TestingModule } from "@nestjs/testing";
import { HomeController } from "../../home/home.controller";
import { HomeService } from "../../home/home.service";

const mockHomeService = {
  getIndexCount: jest.fn(),
  getIndexBlog: jest.fn(),
};

describe("HomeController", () => {
  let controller: HomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [{ provide: HomeService, useValue: mockHomeService }],
    }).compile();
    controller = module.get(HomeController);
    jest.clearAllMocks();
  });

  it("indexCount", async () => {
    mockHomeService.getIndexCount.mockResolvedValue({
      articleCount: 5,
      viewCount: 100,
    });
    const result = await controller.indexCount();
    expect(result).toEqual({
      code: 200,
      message: "SUCCESS",
      data: { articleCount: 5, viewCount: 100 },
    });
  });

  it("indexBlog", async () => {
    mockHomeService.getIndexBlog.mockResolvedValue([{ blogId: 1 }]);
    const result = await controller.indexBlog();
    expect(result.code).toBe(200);
    expect(result.data).toEqual([{ blogId: 1 }]);
  });
});
