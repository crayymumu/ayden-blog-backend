import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export type PhotoStorageKind = 's3' | 'r2' | 'oss'

export class PresignedUrlDto {
  @IsNotEmpty()
  @IsString()
  filename!: string

  @IsOptional()
  @IsString()
  contentType?: string

  @IsOptional()
  @IsString()
  type?: string

  @IsNotEmpty()
  @IsString()
  @IsIn(['s3', 'r2', 'oss'])
  storage!: PhotoStorageKind
}

export class DeleteFileDto {
  @IsNotEmpty()
  @IsString()
  key!: string

  @IsNotEmpty()
  @IsString()
  @IsIn(['s3', 'r2', 'oss'])
  storage!: PhotoStorageKind
}

export class TestConnectionDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['s3', 'r2', 'oss'])
  storage!: PhotoStorageKind
}
