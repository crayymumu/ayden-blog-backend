import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator'

export class CreateVisitLogDto {
  @IsNotEmpty()
  @IsString()
  path!: string

  @IsOptional()
  @IsString()
  @MaxLength(50)
  pageType?: string

  @IsOptional()
  @IsString()
  @MaxLength(100)
  ip?: string

  @IsOptional()
  @IsString()
  userAgent?: string

  @IsOptional()
  @IsString()
  referrer?: string

  @IsOptional()
  @IsString()
  @MaxLength(50)
  source?: string
}
