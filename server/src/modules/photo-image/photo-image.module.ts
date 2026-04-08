import { Module } from '@nestjs/common'
import { PhotoImageController } from './photo-image.controller'
import { PhotoImageService } from './photo-image.service'

@Module({
  controllers: [PhotoImageController],
  providers: [PhotoImageService],
  exports: [PhotoImageService],
})
export class PhotoImageModule {}
