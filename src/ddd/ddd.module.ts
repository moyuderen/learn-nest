import { Module } from '@nestjs/common';
import { DddService } from './ddd.service';
import { DddController } from './ddd.controller';
import { ConfigurableModuleClass } from './ddd.module-definitioin';

@Module({
  controllers: [DddController],
  providers: [DddService],
})
export class DddModule extends ConfigurableModuleClass {}
