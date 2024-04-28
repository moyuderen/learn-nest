import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TimeStatisticsInterceptor } from './time-statistics.interceptor';
import { MapTestInterceptor } from './map-test.interceptor';
import { TapTestInterceptor } from './tap-test.interceptor';
import { CatchErrorTestInterceptor } from './catch-error-test.interceptor';
import { TimeoutTestInterceptor } from './timeout-test.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  @UseInterceptors(TimeStatisticsInterceptor)
  getAaa() {
    return 'aaa';
  }

  @Get('bbb')
  @UseInterceptors(MapTestInterceptor)
  getBbb() {
    return 'bbb';
  }

  @Get('ccc')
  @UseInterceptors(TapTestInterceptor)
  getCcc() {
    return 'ccc';
  }

  @Get('ddd')
  @UseInterceptors(CatchErrorTestInterceptor)
  getDdd() {
    throw new Error('这是一个来自ddd路由的错误信息');
  }

  @Get('eee')
  @UseInterceptors(TimeoutTestInterceptor)
  async getEee() {
    await new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
    return 'eee';
  }

  @Get('fff')
  async geFff() {
    return 'fff';
  }
}
