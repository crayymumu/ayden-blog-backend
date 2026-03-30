import { Test, TestingModule } from "@nestjs/testing";
import { HomeController } from "../../home/home.controller";
import { HomeService } from "../../home/home.service";

const mockHomeService = {
  getIndexCount: jest.fn(),
  getIndexBlog: jest.fn(),
  getBlogList: jest.fn(),
  getBlogDetail: jest.fn(),
  getTagList: jest.fn(),
  getHotBlogList: jest.fn(),
  searchBlogs: jest.fn(),
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

  it("blogList", async () => {
    const data = {
      list: [{ blogId: 1 }],
      total: 1,
      pageIndex: 1,
      pageSize: 10,
    };
    mockHomeService.getBlogList.mockResolvedValue(data);
    const result = await controller.blogList({ pageIndex: 1, pageSize: 10 });
    expect(result.code).toBe(200);
    expect(result.data).toEqual(data);
  });

  it("blogDetail", async () => {
    const blog = { blogId: 1, blogTitle: "test" };
    mockHomeService.getBlogDetail.mockResolvedValue(blog);
    const result = await controller.blogDetail("1");
    expect(result.code).toBe(200);
    expect(result.data).toEqual(blog);
  });

  it("tags", async () => {
    const tags = [{ tagId: 1, tagName: "js" }];
    mockHomeService.getTagList.mockResolvedValue(tags);
    const result = await controller.tags();
    expect(result.code).toBe(200);
    expect(result.data).toEqual(tags);
  });

  it("hotBlogs", async () => {
    const blogs = [{ blogId: 1, blogTitle: "hot" }];
    mockHomeService.getHotBlogList.mockResolvedValue(blogs);
    const result = await controller.hotBlogs("5");
    expect(result.code).toBe(200);
    expect(result.data).toEqual(blogs);
  });

  it("search", async () => {
    const data = {
      list: [{ blogId: 1 }],
      total: 1,
      pageIndex: 1,
      pageSize: 10,
    };
    mockHomeService.searchBlogs.mockResolvedValue(data);
    const result = await controller.search({
      keyword: "test",
      pageIndex: 1,
      pageSize: 10,
    });
    expect(result.code).toBe(200);
    expect(result.data).toEqual(data);
  });
});
