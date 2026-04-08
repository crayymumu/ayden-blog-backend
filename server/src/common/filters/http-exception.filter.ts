import type {
  ArgumentsHost,
  ExceptionFilter,
} from '@nestjs/common'
import type { Response } from 'express'
import {
  Catch,
  HttpException,
} from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()

    const exRes = exception.getResponse()
    if (typeof exRes === 'object' && exRes !== null) {
      response.status(status).json({
        code: status,
        ...(exRes as Record<string, unknown>),
      })
      return
    }

    response.status(status).json({
      code: status,
      message: exception.message,
    })
  }
}
