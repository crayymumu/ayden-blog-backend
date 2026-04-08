import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { CommentController } from '../../modules/comment/comment.controller'
import { CommentService } from '../../modules/comment/comment.service'

const mockService = {
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  allComment: jest.fn(),
  allReply: jest.fn(),
}

describe('commentController', () => {
  let controller: CommentController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentController],
      providers: [{ provide: CommentService, useValue: mockService }],
    }).compile()
    controller = module.get(CommentController)
    jest.clearAllMocks()
  })

  it('create', async () => {
    mockService.create.mockResolvedValue({})
    const result = await controller.create({ blogId: 1, content: 'test' })
    expect(result.code).toBe(200)
  })

  it('remove', async () => {
    mockService.remove.mockResolvedValue({})
    const result = await controller.remove(1)
    expect(result.code).toBe(200)
  })

  it('update', async () => {
    mockService.update.mockResolvedValue({})
    const result = await controller.update({
      commentId: 1,
      content: 'updated',
    })
    expect(result.code).toBe(200)
  })

  it('findOne', async () => {
    mockService.findOne.mockResolvedValue({ commentId: 1 })
    const result = await controller.findOne(1)
    expect(result.code).toBe(200)
    expect(result.data).toEqual({ commentId: 1 })
  })

  it('allComment', async () => {
    mockService.allComment.mockResolvedValue({
      list: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
    })
    const result = await controller.allComment({ pageIndex: 1, pageSize: 10 })
    expect(result.code).toBe(200)
    expect(result.data).toHaveProperty('list')
  })

  it('allReply', async () => {
    mockService.allReply.mockResolvedValue({
      list: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
    })
    const result = await controller.allReply({
      commentId: 1,
      pageIndex: 1,
      pageSize: 10,
    })
    expect(result.code).toBe(200)
    expect(result.data).toHaveProperty('list')
  })
})
