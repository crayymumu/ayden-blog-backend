import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { UserService } from '../../modules/user/user.service'
import { PrismaService } from '../../prisma/prisma.service'

const mockPrismaService = {
  bUser: {
    create: jest.fn(),
    delete: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    count: jest.fn(),
  },
  bSession: {
    findUnique: jest.fn(),
  },
  bAccount: {
    updateMany: jest.fn(),
  },
}

describe('userService', () => {
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile()
    service = module.get(UserService)
    jest.clearAllMocks()
  })

  it('create', async () => {
    const user = { id: '1', name: 'test', email: 'a@b.com' }
    mockPrismaService.bUser.create.mockResolvedValue(user)
    const result = await service.create({ name: 'test', email: 'a@b.com' })
    expect(result).toEqual(user)
    expect(mockPrismaService.bUser.create).toHaveBeenCalled()
  })

  it('remove', async () => {
    mockPrismaService.bUser.delete.mockResolvedValue({ id: '1' })
    await service.remove('1')
    expect(mockPrismaService.bUser.delete).toHaveBeenCalledWith({
      where: { id: '1' },
    })
  })

  it('update', async () => {
    mockPrismaService.bUser.update.mockResolvedValue({})
    await service.update({ id: '1', name: 'updated' })
    expect(mockPrismaService.bUser.update).toHaveBeenCalledWith({
      where: { id: '1' },
      data: { name: 'updated' },
    })
  })

  it('findOne', async () => {
    const user = { id: '1', name: 'test' }
    mockPrismaService.bUser.findUnique.mockResolvedValue(user)
    const result = await service.findOne('1')
    expect(result).toEqual(user)
  })

  it('findAll', async () => {
    mockPrismaService.bUser.findMany.mockResolvedValue([{ id: '1' }])
    mockPrismaService.bUser.count.mockResolvedValue(1)
    const result = await service.findAll(1, 10)
    expect(result).toEqual({ list: [{ id: '1' }], total: 1 })
  })

  it('findByToken', async () => {
    mockPrismaService.bSession.findUnique.mockResolvedValue({
      user: { id: '1', name: 'test' },
    })
    const result = await service.findByToken('token123')
    expect(result).toEqual({ id: '1', name: 'test' })
  })

  it('findByToken returns null', async () => {
    mockPrismaService.bSession.findUnique.mockResolvedValue(null)
    const result = await service.findByToken('invalid')
    expect(result).toBeNull()
  })

  it('allCount', async () => {
    mockPrismaService.bUser.count.mockResolvedValue(10)
    const result = await service.allCount()
    expect(result).toBe(10)
  })

  it('resetPassword', async () => {
    mockPrismaService.bAccount.updateMany.mockResolvedValue({ count: 1 })
    await service.resetPassword('u1')
    expect(mockPrismaService.bAccount.updateMany).toHaveBeenCalledWith({
      where: { userId: 'u1', providerId: 'credential' },
      data: { password: null },
    })
  })
})
