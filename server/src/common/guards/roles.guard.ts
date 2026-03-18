import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorators/roles.decorator";
import { PrismaService } from "../../prisma/prisma.service";

interface AuthenticatedRequest {
  session?: {
    user?: {
      id?: string;
    };
  };
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const session = request.session;
    if (!session?.user?.id) throw new ForbiddenException("未登录");

    const userRoles = await this.prisma.bUserRole.findMany({
      where: { userId: session.user.id },
      include: { role: true },
    });

    const roleNames = userRoles
      .map((ur) => ur.role?.role)
      .filter(Boolean) as string[];

    const hasRole = requiredRoles.some((role) => roleNames.includes(role));
    if (!hasRole) throw new ForbiddenException("权限不足");
    return true;
  }
}
