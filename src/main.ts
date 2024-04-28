import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimeStatisticsInterceptor } from './time-statistics.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TimeStatisticsInterceptor());
  await app.listen(3000);
}
bootstrap();
