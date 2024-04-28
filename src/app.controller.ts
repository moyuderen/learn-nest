import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaPipe } from './aaa.pipe';
import { Article } from './dto/article.dto';

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

  @Post('createArticle')
  createArticle(@Body(ValidationPipe) article: Article) {
    console.log(article);
    return article;
  }
}
