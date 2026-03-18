import { IsOptional, IsString, IsInt } from "class-validator";

export class CreateUserRoleDto {
  @IsOptional() @IsString() userId?: string;
  @IsOptional() @IsInt() roleId?: number;
}

export class UpdateUserRoleDto extends CreateUserRoleDto {
  @IsInt() userRoleId!: number;
}
