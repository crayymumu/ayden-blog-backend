import type {
  CommentListDto,
  CreateCommentDto,
  ReplyListDto,
  UpdateCommentDto,
} from './dto/comment.dto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCommentDto) {
    return this.prisma.bComment.create({
      data: { ...dto, commentCreatetime: new Date() },
    })
  }

  async remove(id: number) {
    return this.prisma.bComment.delete({ where: { commentId: id } })
  }

  async update(dto: UpdateCommentDto) {
    const { commentId, ...data } = dto
    return this.prisma.bComment.update({ where: { commentId }, data })
  }

  async findOne(id: number) {
    return this.prisma.bComment.findUnique({ where: { commentId: id } })
  }

  async allComment(dto: CommentListDto) {
    const pageSize = dto.pageSize ?? 10
    const pageIndex = dto.pageIndex ?? 1
    const where: { blogId?: number } = {}
    if (dto.blogId)
      where.blogId = dto.blogId

    const [list, total] = await Promise.all([
      this.prisma.bComment.findMany({
        where,
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
        orderBy: { commentCreatetime: 'desc' },
        include: { replies: true },
      }),
      this.prisma.bComment.count({ where }),
    ])
    return { list, total, pageNum: pageIndex, pageSize }
  }

  async allReply(dto: ReplyListDto) {
    const pageSize = dto.pageSize ?? 10
    const pageIndex = dto.pageIndex ?? 1
    const where: { commentId?: number } = {}
    if (dto.commentId)
      where.commentId = dto.commentId

    const [list, total] = await Promise.all([
      this.prisma.bReply.findMany({
        where,
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
        orderBy: { replyCreatetime: 'desc' },
      }),
      this.prisma.bReply.count({ where }),
    ])
    return { list, total, pageNum: pageIndex, pageSize }
  }
}
