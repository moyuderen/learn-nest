import { Controller, Get, Inject } from '@nestjs/common';
import { BbbService } from './bbb.service';

@Controller('bbb')
export class BbbController {
  constructor(private readonly bbbService: BbbService) {}

  @Inject('CONFIG_OPTIONS')
  private readonly configOptions;

  @Get()
  getHome() {
    console.log(this.configOptions);
    return this.configOptions;
  }
}
