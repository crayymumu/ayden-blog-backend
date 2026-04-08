import type { TestingModule } from '@nestjs/testing'
import { Test } from '@nestjs/testing'
import { UploadController } from '../../upload/upload.controller'
import { UploadService } from '../../upload/upload.service'

const mockUploadService = {
  getFileHost: jest.fn(),
  uploadFile: jest.fn(),
  uploadFiles: jest.fn(),
}

describe('uploadController', () => {
  let controller: UploadController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadController],
      providers: [{ provide: UploadService, useValue: mockUploadService }],
    }).compile()
    controller = module.get(UploadController)
    jest.clearAllMocks()
  })

  it('filehost', async () => {
    mockUploadService.getFileHost.mockResolvedValue('http://localhost:3000')
    const result = await controller.filehost()
    expect(result).toEqual({
      code: 200,
      message: 'SUCCESS',
      data: 'http://localhost:3000',
    })
  })
})
