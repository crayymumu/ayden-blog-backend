import { Test, TestingModule } from "@nestjs/testing";
import { PermissionController } from "../../permission/permission.controller";
import { PermissionService } from "../../permission/permission.service";
import {
  CreatePermissionDto,
  UpdatePermissionDto,
} from "../../permission/dto/permission.dto";

const mockService = {
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  findAll: jest.fn(),
};

describe("PermissionController", () => {
  let controller: PermissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermissionController],
      providers: [{ provide: PermissionService, useValue: mockService }],
    }).compile();
    controller = module.get(PermissionController);
    jest.clearAllMocks();
  });

  it("should create", async () => {
    mockService.create.mockResolvedValue({ permissionId: 1 });
    const result = await controller.create({
      permissionName: "test",
      permissionCode: "TEST",
    } as CreatePermissionDto);
    expect(result.code).toBe(200);
  });

  it("should remove", async () => {
    mockService.remove.mockResolvedValue({ permissionId: 1 });
    const result = await controller.remove(1);
    expect(result.code).toBe(200);
  });

  it("should update", async () => {
    mockService.update.mockResolvedValue({ permissionId: 1 });
    const result = await controller.update({
      permissionId: 1,
    } as UpdatePermissionDto);
    expect(result.code).toBe(200);
  });

  it("should findOne", async () => {
    mockService.findOne.mockResolvedValue({ permissionId: 1 });
    const result = await controller.findOne(1);
    expect(result.code).toBe(200);
    expect(result.data).toEqual({ permissionId: 1 });
  });

  it("should findAll with pagination", async () => {
    mockService.findAll.mockResolvedValue({
      list: [{ permissionId: 1 }],
      total: 1,
    });
    const result = await controller.findAll("1", "10");
    expect(result.code).toBe(200);
    expect(result.data).toHaveProperty("list");
    expect(result.data).toHaveProperty("total");
  });

  it("should findAll without pagination", async () => {
    mockService.findAll.mockResolvedValue({
      list: [{ permissionId: 1 }],
      total: 1,
    });
    const result = await controller.findAll("0", "0");
    expect(result.code).toBe(200);
    expect(result.data).toEqual([{ permissionId: 1 }]);
  });
});
