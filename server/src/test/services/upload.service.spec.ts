import type { TestingModule } from '@nestjs/testing'
import { NotImplementedException } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { UploadService } from '../../upload/upload.service'

describe('uploadService', () => {
  let service: UploadService

  beforeEach(async () => {
    process.env.BETTER_AUTH_URL = 'http://localhost:3000'
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadService],
    }).compile()
    service = module.get(UploadService)
  })

  it('getFileHost', async () => {
    const result = await service.getFileHost()
    expect(result).toBe('http://localhost:3000')
  })

  it('uploadFile throws NotImplementedException', async () => {
    const file = {
      originalname: 'test.png',
      buffer: Buffer.from('data'),
    } as Express.Multer.File
    await expect(service.uploadFile(file)).rejects.toThrow(
      NotImplementedException,
    )
  })

  it('uploadFiles throws NotImplementedException', async () => {
    const files = [
      { originalname: 'a.jpg', buffer: Buffer.from('a') },
    ] as Express.Multer.File[]
    await expect(service.uploadFiles(files)).rejects.toThrow(
      NotImplementedException,
    )
  })
})
