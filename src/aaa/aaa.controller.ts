import { Controller, Get, Inject } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { MyLogger } from 'src/my-logger';

@Controller('aaa')
export class AaaController {
  constructor(private readonly aaaService: AaaService) {}

  @Inject(MyLogger)
  private readonly logger: MyLogger;

  @Get()
  findAll() {
    this.logger.log('aaa', AaaController.name);
    this.logger.warn('aaa', AaaController.name);
    this.logger.error('aaa', AaaController.name);

    return 'aaa.index';
  }
}
