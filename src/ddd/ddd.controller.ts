import { Controller, Get, Inject } from '@nestjs/common';
import { DddService } from './ddd.service';
import { MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from './ddd.module-definitioin';

@Controller('ddd')
export class DddController {
  constructor(private readonly dddService: DddService) {}

  @Inject(MODULE_OPTIONS_TOKEN)
  private readonly options: typeof OPTIONS_TYPE;

  @Get()
  find() {
    console.log(this.options);
    return this.options;
  }
}
