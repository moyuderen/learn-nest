import { DynamicModule, Module } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';

@Module({})
export class BbbModule {
  static register(options): DynamicModule {
    return {
      module: BbbModule, // 新增的返回自身的Module
      controllers: [BbbController],
      exports: [],
      providers: [
        BbbService,
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
      ],
    };
  }
}
