import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { LoggerModule } from './logger/logger.module';
import { DynamicLoggerModule } from './dynamic-logger/dynamic-logger.module';

@Module({
  imports: [
    AaaModule,
    LoggerModule,
    DynamicLoggerModule.register({
      name: 'hanmeimei',
      age: 18,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
