import { IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";

export class BlogListQueryDto {
  @IsOptional() @Type(() => Number) @IsInt() pageIndex?: number;
  @IsOptional() @Type(() => Number) @IsInt() pageSize?: number;
}

export class SearchBlogsDto {
  @IsString() keyword!: string;
  @IsOptional() @Type(() => Number) @IsInt() pageIndex?: number;
  @IsOptional() @Type(() => Number) @IsInt() pageSize?: number;
}
