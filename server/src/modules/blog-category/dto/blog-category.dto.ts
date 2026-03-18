import { IsOptional, IsInt } from "class-validator";

export class CreateBlogCategoryDto {
  @IsOptional() @IsInt() blogId?: number;
  @IsOptional() @IsInt() categoryId?: number;
}

export class UpdateBlogCategoryDto extends CreateBlogCategoryDto {
  @IsInt() blogCategoryId!: number;
}
