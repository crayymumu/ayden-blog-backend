import { IsOptional, IsString, IsInt } from "class-validator";

export class CreateCommentDto {
  @IsOptional() @IsInt() blogId?: number;
  @IsOptional() @IsInt() type?: number;
  @IsOptional() @IsString() content?: string;
  @IsOptional() @IsString() fromUid?: string;
  @IsOptional() @IsString() fromNickname?: string;
  @IsOptional() @IsString() fromIcon?: string;
  @IsOptional() @IsInt() commentVerify?: number;
  @IsOptional() @IsString() commentFromIp?: string;
}

export class UpdateCommentDto extends CreateCommentDto {
  @IsInt() commentId!: number;
}

export class CommentListDto {
  @IsOptional() @IsInt() blogId?: number;
  @IsOptional() @IsInt() pageIndex?: number;
  @IsOptional() @IsInt() pageSize?: number;
}

export class CreateReplyDto {
  @IsOptional() @IsInt() commentId?: number;
  @IsOptional() @IsInt() toId?: number;
  @IsOptional() @IsInt() toUserId?: number;
  @IsOptional() @IsString() toNickname?: string;
  @IsOptional() @IsInt() replyType?: number;
  @IsOptional() @IsString() replyContent?: string;
  @IsOptional() @IsInt() fromUid?: number;
  @IsOptional() @IsString() fromNickname?: string;
  @IsOptional() @IsString() fromIcon?: string;
  @IsOptional() @IsInt() replyVerify?: number;
  @IsOptional() @IsString() replyFromIp?: string;
}

export class UpdateReplyDto extends CreateReplyDto {
  @IsInt() replyId!: number;
}

export class ReplyListDto {
  @IsOptional() @IsInt() commentId?: number;
  @IsOptional() @IsInt() pageIndex?: number;
  @IsOptional() @IsInt() pageSize?: number;
}
