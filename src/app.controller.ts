import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { MyLogger } from './dynamic-logger/MyLogger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(MyLogger)
  private logger: MyLogger;

  @Get()
  getHello(): string {
    this.logger.log('app ', AppController.name);
    this.logger.warn('app ', AppController.name);
    this.logger.error('app ', AppController.name);
    return this.appService.getHello();
  }
}
