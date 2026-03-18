import { Test, TestingModule } from "@nestjs/testing";
import { RolesGuard } from "../../common/guards/roles.guard";
import { Reflector } from "@nestjs/core";
import { PrismaService } from "../../prisma/prisma.service";
import { ExecutionContext, ForbiddenException } from "@nestjs/common";

const mockPrisma = {
  bUserRole: { findMany: jest.fn() },
};

const createMockContext = (session: unknown): ExecutionContext =>
  ({
    switchToHttp: () => ({
      getRequest: () => ({ session }),
    }),
    getHandler: () => ({}),
    getClass: () => ({}),
  }) as unknown as ExecutionContext;

describe("RolesGuard", () => {
  let guard: RolesGuard;
  let reflector: Reflector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesGuard,
        Reflector,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();
    guard = module.get(RolesGuard);
    reflector = module.get(Reflector);
    jest.clearAllMocks();
  });

  it("should allow when no roles required", async () => {
    jest.spyOn(reflector, "getAllAndOverride").mockReturnValue(undefined);
    const ctx = createMockContext(null);
    expect(await guard.canActivate(ctx)).toBe(true);
  });

  it("should throw when no session", async () => {
    jest.spyOn(reflector, "getAllAndOverride").mockReturnValue(["admin"]);
    const ctx = createMockContext(null);
    await expect(guard.canActivate(ctx)).rejects.toThrow(ForbiddenException);
  });

  it("should throw when user has no required role", async () => {
    jest.spyOn(reflector, "getAllAndOverride").mockReturnValue(["admin"]);
    mockPrisma.bUserRole.findMany.mockResolvedValue([
      { role: { role: "user" } },
    ]);
    const ctx = createMockContext({ user: { id: "u1" } });
    await expect(guard.canActivate(ctx)).rejects.toThrow(ForbiddenException);
  });

  it("should allow when user has required role", async () => {
    jest.spyOn(reflector, "getAllAndOverride").mockReturnValue(["admin"]);
    mockPrisma.bUserRole.findMany.mockResolvedValue([
      { role: { role: "admin" } },
    ]);
    const ctx = createMockContext({ user: { id: "u1" } });
    expect(await guard.canActivate(ctx)).toBe(true);
  });
});
