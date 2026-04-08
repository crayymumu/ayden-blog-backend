import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator'

export class CreatePhotoTagDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name!: string

  @IsOptional()
  @IsString()
  @MaxLength(200)
  category?: string

  @IsOptional()
  @IsString()
  parentId?: string

  @IsOptional()
  @IsString()
  detail?: string
}

export class UpdatePhotoTagDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name?: string

  @IsOptional()
  @IsString()
  @MaxLength(200)
  category?: string

  @IsOptional()
  @IsString()
  detail?: string
}

export class MovePhotoTagDto {
  @IsString()
  @IsNotEmpty()
  tagId!: string

  @IsOptional()
  @IsString()
  targetParentId?: string | null
}
