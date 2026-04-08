import { Module } from '@nestjs/common'
import { PhotosPrismaModule } from '../../prisma/photos-prisma.module'
import { PhotoAnalyticsController } from './photo-analytics.controller'
import { PhotoAnalyticsService } from './photo-analytics.service'

@Module({
  imports: [PhotosPrismaModule],
  controllers: [PhotoAnalyticsController],
  providers: [PhotoAnalyticsService],
  exports: [PhotoAnalyticsService],
})
export class PhotoAnalyticsModule {}
