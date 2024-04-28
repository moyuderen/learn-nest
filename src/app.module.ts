import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnloginFilter } from './unlogin.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: UnloginFilter,
    },
  ],
})
export class AppModule {}
