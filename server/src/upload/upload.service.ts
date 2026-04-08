import { Injectable, NotImplementedException } from '@nestjs/common'

@Injectable()
export class UploadService {
  async getFileHost(): Promise<string> {
    return process.env.BETTER_AUTH_URL || 'http://localhost:3000'
  }

  async uploadFile(_file: Express.Multer.File): Promise<string> {
    throw new NotImplementedException(
      'Local upload removed. Use cloud storage presigned URL instead.',
    )
  }

  async uploadFiles(_files: Express.Multer.File[]): Promise<string[]> {
    throw new NotImplementedException(
      'Local upload removed. Use cloud storage presigned URL instead.',
    )
  }
}
