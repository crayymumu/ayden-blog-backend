import { IsOptional, IsString, IsInt } from "class-validator";

export class CreateTagDto {
  @IsOptional() @IsString() tagName?: string;
  @IsOptional() @IsString() tagDescription?: string;
}

export class UpdateTagDto extends CreateTagDto {
  @IsInt() tagId!: number;
  @IsOptional() @IsInt() tagFlag?: number;
}

export class TagListDto {
  @IsOptional() @IsString() tagName?: string;
  @IsOptional() @IsInt() pageIndex?: number;
  @IsOptional() @IsInt() pageSize?: number;
}
