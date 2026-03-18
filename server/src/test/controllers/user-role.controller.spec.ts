import { Test, TestingModule } from "@nestjs/testing";
import { UserRoleController } from "../../user-role/user-role.controller";
import { UserRoleService } from "../../user-role/user-role.service";
import {
  CreateUserRoleDto,
  UpdateUserRoleDto,
} from "../../user-role/dto/user-role.dto";

const mockService = {
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  findAll: jest.fn(),
};

describe("UserRoleController", () => {
  let controller: UserRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRoleController],
      providers: [{ provide: UserRoleService, useValue: mockService }],
    }).compile();
    controller = module.get(UserRoleController);
    jest.clearAllMocks();
  });

  it("should create", async () => {
    mockService.create.mockResolvedValue({ userRoleId: 1 });
    const result = await controller.create({
      userId: "u1",
      roleId: 1,
    } as CreateUserRoleDto);
    expect(result.code).toBe(200);
  });

  it("should remove", async () => {
    mockService.remove.mockResolvedValue({ userRoleId: 1 });
    const result = await controller.remove(1);
    expect(result.code).toBe(200);
  });

  it("should update", async () => {
    mockService.update.mockResolvedValue({ userRoleId: 1 });
    const result = await controller.update({
      userRoleId: 1,
    } as UpdateUserRoleDto);
    expect(result.code).toBe(200);
  });

  it("should findOne", async () => {
    mockService.findOne.mockResolvedValue({ userRoleId: 1 });
    const result = await controller.findOne(1);
    expect(result.code).toBe(200);
    expect(result.data).toEqual({ userRoleId: 1 });
  });

  it("should findAll", async () => {
    mockService.findAll.mockResolvedValue({
      list: [{ userRoleId: 1 }],
      total: 1,
    });
    const result = await controller.findAll("1", "10");
    expect(result.code).toBe(200);
    expect(result.data).toHaveProperty("list");
    expect(result.data).toHaveProperty("total");
  });
});
