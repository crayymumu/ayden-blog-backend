import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator'

export class CreatePhotoAlbumDto {
  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^\//)
  albumValue!: string

  @IsOptional()
  @IsString()
  detail?: string

  @IsOptional()
  @IsString()
  theme?: string

  @IsOptional()
  @IsInt()
  show?: number

  @IsOptional()
  @IsInt()
  sort?: number

  @IsOptional()
  @IsInt()
  randomShow?: number

  @IsOptional()
  @IsString()
  license?: string

  @IsOptional()
  @IsInt()
  imageSorting?: number

  @IsOptional()
  @IsString()
  cover?: string
}

export class UpdatePhotoAlbumDto {
  @IsNotEmpty()
  @IsString()
  id!: string

  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  @Matches(/^\//)
  albumValue?: string

  @IsOptional()
  @IsString()
  detail?: string

  @IsOptional()
  @IsString()
  theme?: string

  @IsOptional()
  @IsInt()
  show?: number

  @IsOptional()
  @IsInt()
  sort?: number

  @IsOptional()
  @IsInt()
  randomShow?: number

  @IsOptional()
  @IsString()
  license?: string

  @IsOptional()
  @IsInt()
  imageSorting?: number

  @IsOptional()
  @IsString()
  cover?: string
}

export class UpdateAlbumShowDto {
  @IsNotEmpty()
  @IsString()
  id!: string

  @IsInt()
  show!: number
}

export class UpdateAlbumSortDto {
  @IsArray()
  @IsString({ each: true })
  orderedIds!: string[]
}
