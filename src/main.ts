import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { Request } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.enableVersioning({
  //   // 设置header来区分版本
  //   type: VersioningType.HEADER,
  //   // header的字段为version
  //   header: 'version',
  // });

  // app.enableVersioning({
  //   type: VersioningType.MEDIA_TYPE,
  //   key: 'v=',
  // });

  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });

  const extractor = (request: Request) => {
    return request.query.version === '2' ? '2' : '1';
  };

  app.enableVersioning({
    type: VersioningType.CUSTOM,
    extractor,
  });

  await app.listen(3000);
}
bootstrap();
