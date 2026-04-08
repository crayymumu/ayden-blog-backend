import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateRoleDto {
  @IsOptional() @IsString() role?: string
  @IsOptional() @IsString() completeName?: string
}

export class UpdateRoleDto extends CreateRoleDto {
  @IsInt() roleId!: number
}
