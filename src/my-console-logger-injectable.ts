import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class MyInjectableConsoleLogger extends ConsoleLogger {
  @Inject(AppService)
  private readonly appService: AppService;
  // 重写warn方法
  warn(message: string, context: string) {
    console.log('------------------------------------------------------------');
    console.log('appService', this.appService.getHello());
    console.log(
      `---MyInjectableConsoleLogger--- MY WARN 【${context}】: ${message} ---`,
    );
    console.log('------------------------------------------------------------');
  }
}
