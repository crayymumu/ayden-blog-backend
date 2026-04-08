import { Global, Module } from '@nestjs/common'
import { PhotosPrismaService } from './photos-prisma.service'

@Global()
@Module({
  providers: [PhotosPrismaService],
  exports: [PhotosPrismaService],
})
export class PhotosPrismaModule {}
