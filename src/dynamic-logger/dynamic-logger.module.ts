import { DynamicModule, Module } from '@nestjs/common';
import { MyLogger } from './MyLogger';

@Module({})
export class DynamicLoggerModule {
  static register(options): DynamicModule {
    return {
      module: DynamicLoggerModule,
      providers: [
        MyLogger,
        {
          provide: 'LOGGER_OPTIONS',
          useValue: options,
        },
      ],
      exports: [MyLogger, 'LOGGER_OPTIONS'],
    };
  }
}
