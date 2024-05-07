import { Module } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';
import { AaaV2Controller } from './aaa-v2.controller';

@Module({
  // AaaV2Controller 放在前面
  controllers: [AaaV2Controller, AaaController],
  providers: [AaaService],
})
export class AaaModule {}
