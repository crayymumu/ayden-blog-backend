import { Test, TestingModule } from "@nestjs/testing";
import { BlogTagController } from "../../modules/blog-tag/blog-tag.controller";
import { BlogTagService } from "../../modules/blog-tag/blog-tag.service";

const mockService = {
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  findAll: jest.fn(),
};

describe("BlogTagController", () => {
  let controller: BlogTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogTagController],
      providers: [{ provide: BlogTagService, useValue: mockService }],
    }).compile();
    controller = module.get(BlogTagController);
    jest.clearAllMocks();
  });

  it("create", async () => {
    mockService.create.mockResolvedValue({ blogTagId: 1 });
    const result = await controller.create({ blogId: 1, tagId: 2 });
    expect(result.code).toBe(200);
  });

  it("remove", async () => {
    mockService.remove.mockResolvedValue({});
    const result = await controller.remove(1);
    expect(result.code).toBe(200);
  });

  it("update", async () => {
    mockService.update.mockResolvedValue({});
    const result = await controller.update({ blogTagId: 1, blogId: 2 });
    expect(result.code).toBe(200);
  });

  it("findOne", async () => {
    mockService.findOne.mockResolvedValue({ blogTagId: 1 });
    const result = await controller.findOne(1);
    expect(result).toEqual({
      code: 200,
      message: "SUCCESS",
      data: { blogTagId: 1 },
    });
  });

  it("findAll", async () => {
    mockService.findAll.mockResolvedValue({
      list: [{ blogTagId: 1 }],
      total: 1,
    });
    const result = await controller.findAll("1", "10");
    expect(result.code).toBe(200);
    expect(result.data).toMatchObject({ list: [{ blogTagId: 1 }], total: 1 });
  });
});
