import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "../../user/user.controller";
import { UserService } from "../../user/user.service";

const mockUserService = {
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  findAll: jest.fn(),
  findByToken: jest.fn(),
  allCount: jest.fn(),
  resetPassword: jest.fn(),
};

describe("UserController", () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useValue: mockUserService }],
    }).compile();
    controller = module.get(UserController);
    jest.clearAllMocks();
  });

  it("create", async () => {
    const user = { id: "1", name: "test" };
    mockUserService.create.mockResolvedValue(user);
    const result = await controller.create({
      name: "test",
      email: "a@b.com",
      password: "123",
    });
    expect(result).toEqual({ code: 200, message: "SUCCESS", data: user });
  });

  it("remove", async () => {
    mockUserService.remove.mockResolvedValue(undefined);
    const result = await controller.remove("1");
    expect(result.code).toBe(200);
  });

  it("update", async () => {
    mockUserService.update.mockResolvedValue(undefined);
    const result = await controller.update({ id: "1", name: "new" });
    expect(result.code).toBe(200);
  });

  it("getInfo", async () => {
    const user = { id: "1" };
    mockUserService.findByToken.mockResolvedValue(user);
    const result = await controller.getInfo("token");
    expect(result).toEqual({ code: 200, message: "SUCCESS", data: user });
  });

  it("logout", async () => {
    const result = await controller.logout("token");
    expect(result.code).toBe(200);
  });

  it("allCount", async () => {
    mockUserService.allCount.mockResolvedValue(5);
    const result = await controller.allCount();
    expect(result).toEqual({ code: 200, message: "SUCCESS", data: 5 });
  });

  it("resetPassword", async () => {
    mockUserService.resetPassword.mockResolvedValue({ count: 1 });
    const result = await controller.resetPassword("u1");
    expect(result.code).toBe(200);
  });

  it("findOne", async () => {
    const user = { id: "1" };
    mockUserService.findOne.mockResolvedValue(user);
    const result = await controller.findOne("1");
    expect(result).toEqual({ code: 200, message: "SUCCESS", data: user });
  });

  it("findAll", async () => {
    mockUserService.findAll.mockResolvedValue({
      list: [{ id: "1" }],
      total: 1,
    });
    const result = await controller.findAll("1", "10");
    expect(result.code).toBe(200);
    expect(result.data).toMatchObject({ list: [{ id: "1" }], total: 1 });
  });
});
