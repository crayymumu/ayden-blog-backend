import type { Result } from '../../common/interfaces/result.interface'
import type {
  DeleteFileDto,
  PresignedUrlDto,
  TestConnectionDto,
} from './dto/photo-storage.dto'
import { Body, Controller, Delete, Post } from '@nestjs/common'
import { Roles } from '../../common/decorators/roles.decorator'
import { success } from '../../common/helpers/result.helper'
import { PhotoStorageService } from './photo-storage.service'

@Controller('photo-storage')
@Roles('photoAdmin', 'admin')
export class PhotoStorageController {
  constructor(private readonly photoStorageService: PhotoStorageService) {}

  @Post('presigned-url')
  async presignedUrl(@Body() dto: PresignedUrlDto): Promise<Result> {
    const data = await this.photoStorageService.presignedPutUrl(dto)
    return success(data)
  }

  @Delete('file')
  async deleteFile(@Body() dto: DeleteFileDto): Promise<Result> {
    await this.photoStorageService.deleteFile(dto)
    return success()
  }

  @Post('test-connection')
  async testConnection(@Body() dto: TestConnectionDto): Promise<Result> {
    const data = await this.photoStorageService.testConnection(dto)
    return success(data)
  }
}
