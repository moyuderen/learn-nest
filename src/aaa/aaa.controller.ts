import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { AaaService } from './aaa.service';

@Controller({
  path: 'aaa',
  // version: VERSION_NEUTRAL,
  version: ['1', '3'],
})
export class AaaController {
  constructor(private readonly aaaService: AaaService) {}

  @Get()
  findAll() {
    return this.aaaService.findAll();
  }
}
