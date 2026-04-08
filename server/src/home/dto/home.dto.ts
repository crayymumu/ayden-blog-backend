import { Type } from 'class-transformer'
import { IsInt, IsOptional, IsString } from 'class-validator'

export class BlogListQueryDto {
  @IsOptional() @Type(() => Number) @IsInt() pageIndex?: number
  @IsOptional() @Type(() => Number) @IsInt() pageSize?: number
}

export class SearchBlogsDto {
  @IsString() keyword!: string
  @IsOptional() @Type(() => Number) @IsInt() pageIndex?: number
  @IsOptional() @Type(() => Number) @IsInt() pageSize?: number
}
