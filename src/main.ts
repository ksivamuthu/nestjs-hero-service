import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AnyExceptionFilter } from './exceptionfilters/any-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AnyExceptionFilter());
  await app.listen(3000);
}
bootstrap();
