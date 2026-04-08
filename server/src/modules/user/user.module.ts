import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { RolesGuard } from '../../common/guards/roles.guard'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  controllers: [UserController],
  providers: [UserService, { provide: APP_GUARD, useClass: RolesGuard }],
  exports: [UserService],
})
export class UserModule {}
