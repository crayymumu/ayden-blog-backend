import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { RolesGuard } from "../../common/guards/roles.guard";
import { APP_GUARD } from "@nestjs/core";

@Module({
  controllers: [UserController],
  providers: [UserService, { provide: APP_GUARD, useClass: RolesGuard }],
  exports: [UserService],
})
export class UserModule {}
