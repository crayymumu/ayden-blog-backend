import { Module } from '@nestjs/common'
import { PhotosPrismaModule } from '../../prisma/photos-prisma.module'
import { PhotoAlbumController } from './photo-album.controller'
import { PhotoAlbumService } from './photo-album.service'

@Module({
  imports: [PhotosPrismaModule],
  controllers: [PhotoAlbumController],
  providers: [PhotoAlbumService],
  exports: [PhotoAlbumService],
})
export class PhotoAlbumModule {}
