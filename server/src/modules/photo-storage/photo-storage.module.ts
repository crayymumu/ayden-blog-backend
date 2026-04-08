import { Module } from '@nestjs/common'
import { PhotosPrismaModule } from '../../prisma/photos-prisma.module'
import { PhotoStorageController } from './photo-storage.controller'
import { PhotoStorageService } from './photo-storage.service'

@Module({
  imports: [PhotosPrismaModule],
  controllers: [PhotoStorageController],
  providers: [PhotoStorageService],
  exports: [PhotoStorageService],
})
export class PhotoStorageModule {}
