import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
  public catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = 500;
    if (exception.name === 'EntityNotFound') {
      status = 404;
    }

    response
      .status(status)
      .json({
        message: exception.message,
        path: request.url,
        statusCode: status,
        timestamp: new Date().toISOString()
      });
  }
}