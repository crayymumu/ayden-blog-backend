import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateCategoryDto {
  @IsOptional() @IsString() categoryName?: string
  @IsOptional() @IsString() categoryDescription?: string
}

export class UpdateCategoryDto extends CreateCategoryDto {
  @IsInt() categoryId!: number
  @IsOptional() @IsInt() categoryFlag?: number
}

export class CategoryListDto {
  @IsOptional() @IsString() categoryName?: string
  @IsOptional() @IsInt() pageIndex?: number
  @IsOptional() @IsInt() pageSize?: number
}
