import { Module } from '@nestjs/common'
import { PhotosPrismaModule } from '../../prisma/photos-prisma.module'
import { PhotoConfigController } from './photo-config.controller'
import { PhotoConfigService } from './photo-config.service'

@Module({
  imports: [PhotosPrismaModule],
  controllers: [PhotoConfigController],
  providers: [PhotoConfigService],
})
export class PhotoConfigModule {}
