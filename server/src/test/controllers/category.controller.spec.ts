import { Test, TestingModule } from "@nestjs/testing";
import { CategoryController } from "../../category/category.controller";
import { CategoryService } from "../../category/category.service";

const mockService = {
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  list: jest.fn(),
  deleteByIds: jest.fn(),
};

describe("CategoryController", () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [{ provide: CategoryService, useValue: mockService }],
    }).compile();
    controller = module.get(CategoryController);
    jest.clearAllMocks();
  });

  it("create", async () => {
    mockService.create.mockResolvedValue({});
    const result = await controller.create({ categoryName: "test" });
    expect(result.code).toBe(200);
  });

  it("remove", async () => {
    mockService.remove.mockResolvedValue({});
    const result = await controller.remove(1);
    expect(result.code).toBe(200);
  });

  it("update", async () => {
    mockService.update.mockResolvedValue({});
    const result = await controller.update({
      categoryId: 1,
      categoryName: "updated",
    });
    expect(result.code).toBe(200);
  });

  it("findOne", async () => {
    mockService.findOne.mockResolvedValue({ categoryId: 1 });
    const result = await controller.findOne(1);
    expect(result.code).toBe(200);
    expect(result.data).toEqual({ categoryId: 1 });
  });

  it("list", async () => {
    mockService.list.mockResolvedValue({
      list: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
    });
    const result = await controller.list({ pageIndex: 1, pageSize: 10 });
    expect(result.code).toBe(200);
    expect(result.data).toHaveProperty("list");
    expect(result.data).toHaveProperty("total");
  });

  it("deleteByIds", async () => {
    mockService.deleteByIds.mockResolvedValue({});
    const result = await controller.deleteByIds("1,2,3");
    expect(result.code).toBe(200);
    expect(mockService.deleteByIds).toHaveBeenCalledWith([1, 2, 3]);
  });
});
