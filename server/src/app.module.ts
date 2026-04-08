import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from '@thallesp/nestjs-better-auth'
import { HomeModule } from './home/home.module'
import { auth } from './lib/auth'
import { BlogCategoryModule } from './modules/blog-category/blog-category.module'
import { BlogTagModule } from './modules/blog-tag/blog-tag.module'
import { BlogModule } from './modules/blog/blog.module'
import { CategoryModule } from './modules/category/category.module'
import { CommentModule } from './modules/comment/comment.module'
import { PermissionModule } from './modules/permission/permission.module'
import { PhotoAlbumModule } from './modules/photo-album/photo-album.module'
import { PhotoAnalyticsModule } from './modules/photo-analytics/photo-analytics.module'
import { PhotoConfigModule } from './modules/photo-config/photo-config.module'
import { PhotoImageModule } from './modules/photo-image/photo-image.module'
import { PhotoStorageModule } from './modules/photo-storage/photo-storage.module'
import { PhotoTagModule } from './modules/photo-tag/photo-tag.module'
import { RoleModule } from './modules/role/role.module'
import { TagModule } from './modules/tag/tag.module'
import { UserRoleModule } from './modules/user-role/user-role.module'
import { UserModule } from './modules/user/user.module'
import { PhotosPrismaModule } from './prisma/photos-prisma.module'
import { PrismaModule } from './prisma/prisma.module'
import { UploadModule } from './upload/upload.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule.forRoot({ auth }),
    PrismaModule,
    PhotosPrismaModule,
    HomeModule,
    UserModule,
    BlogModule,
    CategoryModule,
    TagModule,
    CommentModule,
    RoleModule,
    PermissionModule,
    UserRoleModule,
    BlogCategoryModule,
    BlogTagModule,
    UploadModule,
    PhotoAlbumModule,
    PhotoImageModule,
    PhotoTagModule,
    PhotoConfigModule,
    PhotoAnalyticsModule,
    PhotoStorageModule,
  ],
})
export class AppModule {}
