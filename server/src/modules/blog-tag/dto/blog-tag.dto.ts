import { IsOptional, IsInt } from "class-validator";

export class CreateBlogTagDto {
  @IsOptional() @IsInt() blogId?: number;
  @IsOptional() @IsInt() tagId?: number;
}

export class UpdateBlogTagDto extends CreateBlogTagDto {
  @IsInt() blogTagId!: number;
}
