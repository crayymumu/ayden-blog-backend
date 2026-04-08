import type { Result } from '../common/interfaces/result.interface'
import { Controller, Post } from '@nestjs/common'
import { AllowAnonymous } from '@thallesp/nestjs-better-auth'
import { success } from '../common/helpers/result.helper'
import { UploadService } from './upload.service'

@Controller()
@AllowAnonymous()
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('filehost')
  async filehost(): Promise<Result> {
    const host = await this.uploadService.getFileHost()
    return success(host)
  }
}
