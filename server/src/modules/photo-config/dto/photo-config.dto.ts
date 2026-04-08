import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator'

export class CreatePhotoConfigDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  configKey!: string

  @IsOptional()
  @IsString()
  configValue?: string

  @IsOptional()
  @IsString()
  detail?: string
}

export class UpdatePhotoConfigDto {
  @IsString()
  @IsNotEmpty()
  id!: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  configKey?: string

  @IsOptional()
  @IsString()
  configValue?: string

  @IsOptional()
  @IsString()
  detail?: string
}
