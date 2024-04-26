import { Controller, Get, Inject } from '@nestjs/common';
import { CccService } from './ccc.service';
import {
  MODULE_OPTIONS_TOKEN,
  CccModuleOtions,
} from './ccc.module-definitioin';

@Controller('ccc')
export class CccController {
  constructor(private readonly cccService: CccService) {}

  @Inject(MODULE_OPTIONS_TOKEN)
  private readonly configOptions: CccModuleOtions;

  @Get()
  find() {
    console.log(this.configOptions);
    return this.configOptions;
  }
}
