import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from "@nestjs/common";
import { AllowAnonymous } from "@thallesp/nestjs-better-auth";
import { CommentService } from "./comment.service";
import {
  CreateCommentDto,
  UpdateCommentDto,
  CommentListDto,
  ReplyListDto,
} from "./dto/comment.dto";
import { success, pageResult } from "../../common/helpers/result.helper";
import { Result } from "../../common/interfaces/result.interface";

@Controller("comment")
@AllowAnonymous()
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async create(@Body() dto: CreateCommentDto): Promise<Result> {
    await this.commentService.create(dto);
    return success();
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number): Promise<Result> {
    await this.commentService.remove(id);
    return success();
  }

  @Put()
  async update(@Body() dto: UpdateCommentDto): Promise<Result> {
    await this.commentService.update(dto);
    return success();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<Result> {
    const data = await this.commentService.findOne(id);
    return success(data);
  }

  @Post("allComment")
  async allComment(@Body() dto: CommentListDto): Promise<Result> {
    const result = await this.commentService.allComment(dto);
    return pageResult(
      result.list,
      result.total,
      result.pageNum,
      result.pageSize,
    );
  }

  @Post("allReply")
  async allReply(@Body() dto: ReplyListDto): Promise<Result> {
    const result = await this.commentService.allReply(dto);
    return pageResult(
      result.list,
      result.total,
      result.pageNum,
      result.pageSize,
    );
  }
}
