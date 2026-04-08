import { Type } from 'class-transformer'
import {
  IsArray,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator'

export class CreatePhotoImageDto {
  @IsString()
  @IsNotEmpty()
  url!: string

  @Type(() => Number)
  @IsInt()
  @Min(1)
  width!: number

  @Type(() => Number)
  @IsInt()
  @Min(1)
  height!: number

  @IsOptional()
  @IsString()
  imageName?: string

  @IsOptional()
  @IsString()
  previewUrl?: string

  @IsOptional()
  @IsString()
  videoUrl?: string

  @IsOptional()
  @IsString()
  originalKey?: string

  @IsOptional()
  @IsString()
  previewKey?: string

  @IsOptional()
  @IsString()
  videoKey?: string

  @IsOptional()
  @IsString()
  blurhash?: string

  @IsOptional()
  exif?: unknown

  @IsOptional()
  labels?: unknown

  @IsOptional()
  @IsString()
  lon?: string

  @IsOptional()
  @IsString()
  lat?: string

  @IsOptional()
  @IsString()
  title?: string

  @IsOptional()
  @IsString()
  detail?: string

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  type?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  show?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  showOnMainpage?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  featured?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  sort?: number
}

export class UpdatePhotoImageDto {
  @IsString()
  @IsNotEmpty()
  id!: string

  @IsOptional()
  @IsString()
  url?: string

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  width?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  height?: number

  @IsOptional()
  @IsString()
  imageName?: string

  @IsOptional()
  @IsString()
  previewUrl?: string

  @IsOptional()
  @IsString()
  videoUrl?: string

  @IsOptional()
  @IsString()
  originalKey?: string

  @IsOptional()
  @IsString()
  previewKey?: string

  @IsOptional()
  @IsString()
  videoKey?: string

  @IsOptional()
  @IsString()
  blurhash?: string

  @IsOptional()
  exif?: unknown

  @IsOptional()
  labels?: unknown

  @IsOptional()
  @IsString()
  lon?: string

  @IsOptional()
  @IsString()
  lat?: string

  @IsOptional()
  @IsString()
  title?: string

  @IsOptional()
  @IsString()
  detail?: string

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  type?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  show?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  showOnMainpage?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  featured?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  sort?: number
}

export class PhotoImageListDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pageIndex?: number

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pageSize?: number

  @IsOptional()
  @IsIn(['active', 'deleted', 'all'])
  delScope?: 'active' | 'deleted' | 'all'

  @IsOptional()
  @IsString()
  albumValue?: string
}

export class BatchDeletePhotoImageDto {
  @IsArray()
  @IsString({ each: true })
  ids!: string[]
}

export class TogglePhotoImageShowDto {
  @IsString()
  @IsNotEmpty()
  id!: string

  @Type(() => Number)
  @IsInt()
  show!: number
}

export class TogglePhotoImageFeaturedDto {
  @IsString()
  @IsNotEmpty()
  id!: string

  @Type(() => Number)
  @IsInt()
  featured!: number
}

export class PhotoImageSortDto {
  @IsArray()
  @IsString({ each: true })
  orderedIds!: string[]
}

export class CheckPhotoImageDuplicateDto {
  @IsOptional()
  @IsString()
  blurhash?: string

  @IsOptional()
  @IsString()
  url?: string
}

export class ImageAlbumRelationDto {
  @IsString()
  @IsNotEmpty()
  imageId!: string

  @IsString()
  @IsNotEmpty()
  albumValue!: string
}

export class ImageTagRelationDto {
  @IsString()
  @IsNotEmpty()
  imageId!: string

  @IsString()
  @IsNotEmpty()
  tagId!: string
}
