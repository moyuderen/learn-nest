import { Body, Controller, Get, Inject, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { WINSTON_LOGGER_TOKEN } from './winston/winston.module';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // private logger = new Logger();

  @Inject(WINSTON_LOGGER_TOKEN) // 改成 inject 的方式，始终使用同一个实例，性能更好：
  private logger;

  @Get()
  getHello(): string {
    this.logger.log(AppController.name, 'app');
    this.logger.warn(AppController.name, 'app');
    this.logger.error(AppController.name, 'app');

    return this.appService.getHello();
  }

  @Get('getError')
  getError() {
    (function () {
      throw Error('yyy');
    })();
  }

  @Get('rejectError')
  rejectError() {
    (async function () {
      throw Error('yyy');
    })();
  }

  @Post('reportLog')
  reportLog(@Body() body: any) {
    console.log(body);
  }
}
