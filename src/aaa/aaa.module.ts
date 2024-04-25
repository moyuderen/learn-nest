import { Module, forwardRef } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';
import { BbbModule } from 'src/bbb/bbb.module';

@Module({
  imports: [forwardRef(() => BbbModule)],
  controllers: [AaaController],
  providers: [AaaService],
})
export class AaaModule {}
