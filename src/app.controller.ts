import { Controller, Get, Inject, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getSession')
  getSession(@Session() session) {
    console.log(session);
    session.count = session.count ? session.count + 1 : 1;
    return session;
  }

  @Get('getJwt')
  getJwt() {
    const newToken = this.jwtService.sign({
      count: 1,
    });
    return newToken;
  }
}
