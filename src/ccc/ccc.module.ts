import { Module } from '@nestjs/common';
import { CccService } from './ccc.service';
import { CccController } from './ccc.controller';
import { ConfigurableModuleClass } from './ccc.module-definitioin';

@Module({
  controllers: [CccController],
  providers: [CccService],
})
export class CccModule extends ConfigurableModuleClass {}
