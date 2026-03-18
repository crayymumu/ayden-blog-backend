import { Test, TestingModule } from "@nestjs/testing";
import { RoleService } from "../../role/role.service";
import { PrismaService } from "../../prisma/prisma.service";

const mockPrisma = {
  bRole: {
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
};

describe("RoleService", () => {
  let service: RoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoleService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();
    service = module.get(RoleService);
    jest.clearAllMocks();
  });

  it("create", async () => {
    mockPrisma.bRole.create.mockResolvedValue({ roleId: 1 });
    const result = await service.create({
      role: "admin",
      completeName: "管理员",
    });
    expect(result).toEqual({ roleId: 1 });
    expect(mockPrisma.bRole.create).toHaveBeenCalledWith({
      data: { role: "admin", completeName: "管理员" },
    });
  });

  it("remove", async () => {
    mockPrisma.bRole.delete.mockResolvedValue({});
    await service.remove(1);
    expect(mockPrisma.bRole.delete).toHaveBeenCalledWith({
      where: { roleId: 1 },
    });
  });

  it("update", async () => {
    mockPrisma.bRole.update.mockResolvedValue({});
    await service.update({ roleId: 1, role: "editor" });
    expect(mockPrisma.bRole.update).toHaveBeenCalledWith({
      where: { roleId: 1 },
      data: { role: "editor" },
    });
  });

  it("findOne", async () => {
    const role = { roleId: 1, role: "admin" };
    mockPrisma.bRole.findUnique.mockResolvedValue(role);
    const result = await service.findOne(1);
    expect(result).toEqual(role);
  });

  it("findAll with pagination", async () => {
    mockPrisma.bRole.findMany.mockResolvedValue([{ roleId: 1 }]);
    mockPrisma.bRole.count.mockResolvedValue(1);
    const result = await service.findAll(1, 10);
    expect(result).toEqual({ list: [{ roleId: 1 }], total: 1 });
  });

  it("findAll without pagination", async () => {
    mockPrisma.bRole.findMany.mockResolvedValue([{ roleId: 1 }, { roleId: 2 }]);
    const result = await service.findAll(0, 0);
    expect(result).toEqual({ list: [{ roleId: 1 }, { roleId: 2 }], total: 2 });
  });
});
