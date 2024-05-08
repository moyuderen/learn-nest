import { Controller, Get, Param, Query } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('init')
  async init() {
    return await this.cityService.init();
  }

  @Get('findTrees')
  findTrees() {
    return this.cityService.findTrees();
  }

  @Get('find')
  find() {
    return this.cityService.find();
  }

  @Get('findRoots')
  findRoots() {
    return this.cityService.findRoots();
  }

  @Get('findDescendantsTree')
  async findDescendantsTree(@Query('name') name: string) {
    if (!name) {
      return '缺少name参数';
    }
    return await this.cityService.findDescendantsTree(name);
  }

  @Get('findDescendants')
  async findDescendants(@Query('name') name: string) {
    if (!name) {
      return '缺少name参数';
    }
    return await this.cityService.findDescendants(name);
  }

  @Get('findAncestorsTree')
  async findAncestorsTree(@Query('name') name: string) {
    if (!name) {
      return '缺少name参数';
    }
    return await this.cityService.findAncestorsTree(name);
  }

  @Get('findAncestors')
  async findAncestors(@Query('name') name: string) {
    if (!name) {
      return '缺少name参数';
    }
    return await this.cityService.findAncestors(name);
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    return await this.cityService.findOne(+id);
  }
}
