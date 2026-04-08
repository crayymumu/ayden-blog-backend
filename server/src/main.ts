import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { config } from 'dotenv'

config()

async function bootstrap(): Promise<void> {
  const { AppModule } = await import('./app.module')
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  })
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.enableCors({
    origin: true,
    credentials: true,
  })
  await app.listen(process.env.PORT ?? 3000)
}
void bootstrap()
