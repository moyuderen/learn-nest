import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TapTestInterceptor } from './tap-test.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      // 内置拦截器token
      provide: APP_INTERCEPTOR,
      // 拦截器类
      useClass: TapTestInterceptor,
    },
  ],
})
export class AppModule {}
