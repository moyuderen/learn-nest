import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UnloginFilter } from './unlogin.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new UnloginFilter());
  await app.listen(3000);
}
bootstrap();
