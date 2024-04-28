import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UnloginException, UnloginFilter } from './unlogin.filter';

@Controller()
// @UseFilters(UnloginFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new HttpException('xxxx', HttpStatus.BAD_REQUEST);
  }

  @Get('user')
  // @UseFilters(UnloginFilter)
  getUser(): string {
    throw new UnloginException('请先登录');
  }

  @Get('user1')
  getUser1(): string {
    throw new UnloginException('请先登录');
  }
}
