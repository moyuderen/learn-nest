import { ConsoleLogger } from '@nestjs/common';

export class MyConsoleLogger extends ConsoleLogger {
  // 重写warn方法
  warn(message: string, context: string) {
    console.log(`---MyConsoleLogger--- MY WARN 【${context}】: ${message} ---`);
  }
}
