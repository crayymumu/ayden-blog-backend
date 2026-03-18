import { Test, TestingModule } from "@nestjs/testing";
import { BlogController } from "../../modules/blog/blog.controller";
import { BlogService } from "../../modules/blog/blog.service";

const mockBlogService = {
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  findOneAndRecord: jest.fn(),
  blogList: jest.fn(),
  blogListIndex: jest.fn(),
  fuzzySearch: jest.fn(),
  saveTemp: jest.fn(),
  selectPlaceOnFile: jest.fn(),
  selectBlogByTagId: jest.fn(),
  selectBlogByDate: jest.fn(),
  topRead: jest.fn(),
};

describe("BlogController", () => {
  let controller: BlogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogController],
      providers: [{ provide: BlogService, useValue: mockBlogService }],
    }).compile();
    controller = module.get(BlogController);
    jest.clearAllMocks();
  });

  it("create", async () => {
    mockBlogService.create.mockResolvedValue({ blogId: 1 });
    const result = await controller.create({ blogTitle: "test" });
    expect(result).toEqual({
      code: 200,
      message: "SUCCESS",
      data: { blogId: 1 },
    });
  });

  it("remove", async () => {
    mockBlogService.remove.mockResolvedValue({});
    const result = await controller.remove(1);
    expect(result.code).toBe(200);
  });

  it("update", async () => {
    mockBlogService.update.mockResolvedValue(undefined);
    const result = await controller.update({ blogId: 1, blogTitle: "new" });
    expect(result.code).toBe(200);
  });

  it("fuzzy", async () => {
    mockBlogService.fuzzySearch.mockResolvedValue({
      list: [{ blogId: 1 }],
      total: 1,
      pageNum: 1,
      pageSize: 10,
    });
    const result = await controller.fuzzy("test", "1");
    expect(result.code).toBe(200);
    expect(result.data).toMatchObject({ list: [{ blogId: 1 }], total: 1 });
  });

  it("selectPlaceOnFile", async () => {
    mockBlogService.selectPlaceOnFile.mockResolvedValue([
      { fileDate: "2024-01", blogCount: 3 },
    ]);
    const result = await controller.selectPlaceOnFile();
    expect(result).toEqual({
      code: 200,
      message: "SUCCESS",
      data: [{ fileDate: "2024-01", blogCount: 3 }],
    });
  });

  it("selectBlogByTagId", async () => {
    mockBlogService.selectBlogByTagId.mockResolvedValue([{ blogId: 1 }]);
    const result = await controller.selectBlogByTagId("1");
    expect(result.code).toBe(200);
    expect(result.data).toEqual([{ blogId: 1 }]);
  });

  it("selectBlogByDate", async () => {
    mockBlogService.selectBlogByDate.mockResolvedValue([{ blogId: 1 }]);
    const result = await controller.selectBlogByDate("2024-01");
    expect(result.code).toBe(200);
  });

  it("topRead", async () => {
    mockBlogService.topRead.mockResolvedValue([{ blogId: 1 }]);
    const result = await controller.topRead("5");
    expect(result).toEqual({
      code: 200,
      message: "SUCCESS",
      data: [{ blogId: 1 }],
    });
  });

  it("findOneRecord", async () => {
    mockBlogService.findOneAndRecord.mockResolvedValue({ blogId: 1 });
    const result = await controller.findOneRecord(1);
    expect(result).toEqual({
      code: 200,
      message: "SUCCESS",
      data: { blogId: 1 },
    });
  });

  it("findOne", async () => {
    mockBlogService.findOne.mockResolvedValue({ blogId: 1 });
    const result = await controller.findOne(1);
    expect(result).toEqual({
      code: 200,
      message: "SUCCESS",
      data: { blogId: 1 },
    });
  });

  it("blogList", async () => {
    mockBlogService.blogList.mockResolvedValue({
      list: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
    });
    const result = await controller.blogList({ pageIndex: 1, pageSize: 10 });
    expect(result.code).toBe(200);
    expect(result.data).toMatchObject({ total: 0 });
  });

  it("blogListIndex", async () => {
    mockBlogService.blogListIndex.mockResolvedValue({
      list: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
    });
    const result = await controller.blogListIndex({
      pageIndex: 1,
      pageSize: 10,
    });
    expect(result.code).toBe(200);
  });

  it("saveTemp", async () => {
    mockBlogService.saveTemp.mockResolvedValue({ blogId: 10 });
    const result = await controller.saveTemp({ blogTitle: "temp" });
    expect(result.code).toBe(200);
  });

  it("updateBlog", async () => {
    mockBlogService.update.mockResolvedValue(undefined);
    const result = await controller.updateBlog({ blogId: 1 });
    expect(result.code).toBe(200);
  });
});
