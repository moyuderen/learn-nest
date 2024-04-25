import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Role } from './role.decorator';
import { RoleGuard } from './role.guard';
import { Bbb } from './bbb.decorator';
import { MyQuery } from './my-query.decorator';
import { Ddd } from './ddd.decorator';

@Ddd('ddd')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Role('admin')
  @UseGuards(RoleGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Bbb('bbb', 'user')
  getBbb(): string {
    return this.appService.getHello();
  }

  @Get('ccc')
  getCcc(@MyQuery('name') name) {
    return name;
  }
}
