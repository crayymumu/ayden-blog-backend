import { Test, TestingModule } from "@nestjs/testing";
import { UserRoleService } from "../../modules/user-role/user-role.service";
import { PrismaService } from "../../prisma/prisma.service";
import {
  CreateUserRoleDto,
  UpdateUserRoleDto,
} from "../../modules/user-role/dto/user-role.dto";

const mockPrisma = {
  bUserRole: {
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
};

describe("UserRoleService", () => {
  let service: UserRoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRoleService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();
    service = module.get(UserRoleService);
    jest.clearAllMocks();
  });

  it("should create", async () => {
    mockPrisma.bUserRole.create.mockResolvedValue({ userRoleId: 1 });
    const result = await service.create({
      userId: "u1",
      roleId: 1,
    } as CreateUserRoleDto);
    expect(mockPrisma.bUserRole.create).toHaveBeenCalled();
    expect(result).toEqual({ userRoleId: 1 });
  });

  it("should remove", async () => {
    mockPrisma.bUserRole.delete.mockResolvedValue({ userRoleId: 1 });
    const result = await service.remove(1);
    expect(mockPrisma.bUserRole.delete).toHaveBeenCalledWith({
      where: { userRoleId: 1 },
    });
    expect(result).toEqual({ userRoleId: 1 });
  });

  it("should update", async () => {
    mockPrisma.bUserRole.update.mockResolvedValue({ userRoleId: 1, roleId: 2 });
    const result = await service.update({
      userRoleId: 1,
      roleId: 2,
    } as UpdateUserRoleDto);
    expect(mockPrisma.bUserRole.update).toHaveBeenCalledWith({
      where: { userRoleId: 1 },
      data: { roleId: 2 },
    });
    expect(result).toEqual({ userRoleId: 1, roleId: 2 });
  });

  it("should findOne", async () => {
    mockPrisma.bUserRole.findUnique.mockResolvedValue({ userRoleId: 1 });
    const result = await service.findOne(1);
    expect(mockPrisma.bUserRole.findUnique).toHaveBeenCalledWith({
      where: { userRoleId: 1 },
    });
    expect(result).toEqual({ userRoleId: 1 });
  });

  it("should findAll", async () => {
    mockPrisma.bUserRole.findMany.mockResolvedValue([{ userRoleId: 1 }]);
    mockPrisma.bUserRole.count.mockResolvedValue(1);
    const result = await service.findAll(1, 10);
    expect(result).toEqual({ list: [{ userRoleId: 1 }], total: 1 });
  });
});
