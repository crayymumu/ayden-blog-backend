import { Test, TestingModule } from "@nestjs/testing";
import { PermissionService } from "../../modules/permission/permission.service";
import { PrismaService } from "../../prisma/prisma.service";
import {
  CreatePermissionDto,
  UpdatePermissionDto,
} from "../../modules/permission/dto/permission.dto";

const mockPrisma = {
  bPermission: {
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
};

describe("PermissionService", () => {
  let service: PermissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PermissionService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();
    service = module.get(PermissionService);
    jest.clearAllMocks();
  });

  it("should create", async () => {
    mockPrisma.bPermission.create.mockResolvedValue({ permissionId: 1 });
    const result = await service.create({
      permissionName: "test",
      permissionCode: "TEST",
    } as CreatePermissionDto);
    expect(mockPrisma.bPermission.create).toHaveBeenCalled();
    expect(result).toEqual({ permissionId: 1 });
  });

  it("should remove", async () => {
    mockPrisma.bPermission.delete.mockResolvedValue({ permissionId: 1 });
    const result = await service.remove(1);
    expect(mockPrisma.bPermission.delete).toHaveBeenCalledWith({
      where: { permissionId: 1 },
    });
    expect(result).toEqual({ permissionId: 1 });
  });

  it("should update", async () => {
    mockPrisma.bPermission.update.mockResolvedValue({
      permissionId: 1,
      permissionName: "updated",
    });
    const result = await service.update({
      permissionId: 1,
      permissionName: "updated",
    } as UpdatePermissionDto);
    expect(mockPrisma.bPermission.update).toHaveBeenCalledWith({
      where: { permissionId: 1 },
      data: { permissionName: "updated" },
    });
    expect(result).toEqual({ permissionId: 1, permissionName: "updated" });
  });

  it("should findOne", async () => {
    mockPrisma.bPermission.findUnique.mockResolvedValue({ permissionId: 1 });
    const result = await service.findOne(1);
    expect(mockPrisma.bPermission.findUnique).toHaveBeenCalledWith({
      where: { permissionId: 1 },
    });
    expect(result).toEqual({ permissionId: 1 });
  });

  it("should findAll with pagination", async () => {
    mockPrisma.bPermission.findMany.mockResolvedValue([{ permissionId: 1 }]);
    mockPrisma.bPermission.count.mockResolvedValue(1);
    const result = await service.findAll(1, 10);
    expect(result).toEqual({ list: [{ permissionId: 1 }], total: 1 });
  });

  it("should findAll without pagination", async () => {
    mockPrisma.bPermission.findMany.mockResolvedValue([
      { permissionId: 1 },
      { permissionId: 2 },
    ]);
    const result = await service.findAll(0, 0);
    expect(result).toEqual({
      list: [{ permissionId: 1 }, { permissionId: 2 }],
      total: 2,
    });
  });
});
