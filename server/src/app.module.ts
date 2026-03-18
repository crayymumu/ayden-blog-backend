import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "@thallesp/nestjs-better-auth";
import { auth } from "./lib/auth";
import { PrismaModule } from "./prisma/prisma.module";
import { HomeModule } from "./home/home.module";
import { UserModule } from "./modules/user/user.module";
import { BlogModule } from "./modules/blog/blog.module";
import { CategoryModule } from "./modules/category/category.module";
import { TagModule } from "./modules/tag/tag.module";
import { CommentModule } from "./modules/comment/comment.module";
import { RoleModule } from "./modules/role/role.module";
import { PermissionModule } from "./modules/permission/permission.module";
import { UserRoleModule } from "./modules/user-role/user-role.module";
import { BlogCategoryModule } from "./modules/blog-category/blog-category.module";
import { BlogTagModule } from "./modules/blog-tag/blog-tag.module";
import { UploadModule } from "./upload/upload.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule.forRoot({ auth }),
    PrismaModule,
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
  ],
})
export class AppModule {}
