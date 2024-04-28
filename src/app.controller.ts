import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaPipe } from './aaa.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  getAaa(@Query('a', AaaPipe) a: string) {
    return a;
  }
}
