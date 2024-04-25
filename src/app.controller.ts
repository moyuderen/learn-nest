import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Inject() // Inject的方式注入
  private readonly appService: AppService;

  @Inject()
  private readonly person1: { name: string; age: number };

  @Inject()
  private readonly person2: { name: string; age: number };

  @Inject()
  private readonly person3: { name: string; desc: string };

  @Inject()
  private readonly person4: { name: string; age: number };

  @Inject()
  private readonly person5: { name: string; age: number };

  @Get()
  getHello(): string {
    console.log(this.person1);
    return this.appService.getHello();
  }
}
