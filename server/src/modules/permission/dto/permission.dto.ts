import { IsOptional, IsString, IsInt } from "class-validator";

export class CreatePermissionDto {
  @IsOptional() @IsString() permission?: string;
  @IsOptional() @IsString() permissionUrl?: string;
  @IsOptional() @IsString() permissionName?: string;
}

export class UpdatePermissionDto extends CreatePermissionDto {
  @IsInt() permissionId!: number;
}
