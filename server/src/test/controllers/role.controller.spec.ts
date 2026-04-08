import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { RoleController } from '../../modules/role/role.controller'
import { RoleService } from '../../modules/role/role.service'

const mockRoleService = {
  create: jest.fn(),
  remove: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  findAll: jest.fn(),
}

describe('roleController', () => {
  let controller: RoleController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
      providers: [{ provide: RoleService, useValue: mockRoleService }],
    }).compile()
    controller = module.get(RoleController)
    jest.clearAllMocks()
  })

  it('create', async () => {
    mockRoleService.create.mockResolvedValue({ roleId: 1 })
    const result = await controller.create({ role: 'admin' })
    expect(result.code).toBe(200)
  })

  it('remove', async () => {
    mockRoleService.remove.mockResolvedValue({})
    const result = await controller.remove(1)
    expect(result.code).toBe(200)
  })

  it('update', async () => {
    mockRoleService.update.mockResolvedValue({})
    const result = await controller.update({ roleId: 1, role: 'editor' })
    expect(result.code).toBe(200)
  })

  it('findOne', async () => {
    mockRoleService.findOne.mockResolvedValue({ roleId: 1, role: 'admin' })
    const result = await controller.findOne(1)
    expect(result).toEqual({
      code: 200,
      message: 'SUCCESS',
      data: { roleId: 1, role: 'admin' },
    })
  })

  it('findAll with pagination', async () => {
    mockRoleService.findAll.mockResolvedValue({
      list: [{ roleId: 1 }],
      total: 1,
    })
    const result = await controller.findAll('1', '10')
    expect(result.code).toBe(200)
    expect(result.data).toMatchObject({ list: [{ roleId: 1 }], total: 1 })
  })

  it('findAll without pagination', async () => {
    mockRoleService.findAll.mockResolvedValue({
      list: [{ roleId: 1 }],
      total: 1,
    })
    const result = await controller.findAll('0', '0')
    expect(result).toEqual({
      code: 200,
      message: 'SUCCESS',
      data: [{ roleId: 1 }],
    })
  })
})
