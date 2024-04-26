import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // 支持依赖注入，它们能够注入属于同一模块的依赖项
  @Inject(AppService)
  private readonly appService: AppService;

  async use(req: any, res: any, next: () => void) {
    console.log('before' + this.appService.getHello());
    await next();
    console.log('after' + this.appService.getHello());
  }
}
