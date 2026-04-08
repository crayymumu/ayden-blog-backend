import { Module } from '@nestjs/common'
import { PhotoTagController } from './photo-tag.controller'
import { PhotoTagService } from './photo-tag.service'

@Module({
  controllers: [PhotoTagController],
  providers: [PhotoTagService],
})
export class PhotoTagModule {}
