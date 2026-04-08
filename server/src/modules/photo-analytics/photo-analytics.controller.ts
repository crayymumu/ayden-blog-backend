import type { Result } from '../../common/interfaces/result.interface'
import type { CreateVisitLogDto } from './dto/photo-analytics.dto'
import { Body, Controller, Get, Post } from '@nestjs/common'
import { AllowAnonymous } from '@thallesp/nestjs-better-auth'
import { Roles } from '../../common/decorators/roles.decorator'
import { success } from '../../common/helpers/result.helper'
import { PhotoAnalyticsService } from './photo-analytics.service'

@Controller('photo-analytics')
export class PhotoAnalyticsController {
  constructor(private readonly photoAnalyticsService: PhotoAnalyticsService) {}

  @Get()
  @Roles('photoAdmin', 'admin')
  async getAnalytics(): Promise<Result> {
    const data = await this.photoAnalyticsService.getAggregated()
    return success(data)
  }

  @Post('visit')
  @AllowAnonymous()
  async recordVisit(@Body() dto: CreateVisitLogDto): Promise<Result> {
    const data = await this.photoAnalyticsService.recordVisit(dto)
    return success(data)
  }
}
