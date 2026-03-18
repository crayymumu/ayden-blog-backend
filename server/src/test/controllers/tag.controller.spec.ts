import { Test, TestingModule } from "@nestjs/testing";
import { TagController } from "../../modules/tag/tag.controller";
import { TagService } from "../../modules/tag/tag.service";

const mockService = {
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  list: jest.fn(),
  deleteByIds: jest.fn(),
  getAllTag: jest.fn(),
};

describe("TagController", () => {
  let controller: TagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagController],
      providers: [{ provide: TagService, useValue: mockService }],
    }).compile();
    controller = module.get(TagController);
    jest.clearAllMocks();
  });

  it("create", async () => {
    mockService.create.mockResolvedValue({});
    const result = await controller.create({ tagName: "test" });
    expect(result.code).toBe(200);
  });

  it("remove", async () => {
    mockService.remove.mockResolvedValue({});
    const result = await controller.remove(1);
    expect(result.code).toBe(200);
  });

  it("update", async () => {
    mockService.update.mockResolvedValue({});
    const result = await controller.update({ tagId: 1, tagName: "updated" });
    expect(result.code).toBe(200);
  });

  it("deleteByIds", async () => {
    mockService.deleteByIds.mockResolvedValue({});
    const result = await controller.deleteByIds("1,2,3");
    expect(result.code).toBe(200);
    expect(mockService.deleteByIds).toHaveBeenCalledWith([1, 2, 3]);
  });

  it("getAllTag", async () => {
    mockService.getAllTag.mockResolvedValue([{ tagId: 1, usedBy: 3 }]);
    const result = await controller.getAllTag();
    expect(result.code).toBe(200);
    expect(result.data).toEqual([{ tagId: 1, usedBy: 3 }]);
  });

  it("findOne", async () => {
    mockService.findOne.mockResolvedValue({ tagId: 1 });
    const result = await controller.findOne(1);
    expect(result.code).toBe(200);
    expect(result.data).toEqual({ tagId: 1 });
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
  });
});
