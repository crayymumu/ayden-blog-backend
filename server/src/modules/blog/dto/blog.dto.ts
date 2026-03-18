import { IsOptional, IsString, IsInt, IsArray } from "class-validator";

export class CreateBlogDto {
  @IsOptional() @IsString() blogTitle?: string;
  @IsOptional() @IsString() blogAbstract?: string;
  @IsOptional() @IsInt() blogSource?: number;
  @IsOptional() @IsInt() blogLevel?: number;
  @IsOptional() @IsString() blogPassword?: string;
  @IsOptional() @IsString() blogAuthor?: string;
  @IsOptional() @IsInt() blogFlag?: number;
  @IsOptional() @IsString() blogMdcontent?: string;
  @IsOptional() @IsString() blogContent?: string;
  @IsOptional() @IsArray() tagChoose?: number[];
  @IsOptional() @IsArray() categoryChoose?: number[];
}

export class BlogListDto {
  @IsOptional() @IsInt() pageIndex?: number;
  @IsOptional() @IsInt() pageSize?: number;
  @IsOptional() @IsInt() blogLevel?: number;
  @IsOptional() @IsInt() blogFlag?: number;
}

export class UpdateBlogDto extends CreateBlogDto {
  @IsInt() blogId!: number;
}
