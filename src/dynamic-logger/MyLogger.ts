import { Inject, Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class MyLogger implements LoggerService {
  @Inject('LOGGER_OPTIONS')
  public options: Record<string, any>;

  log(message: string, context: string) {
    console.log(this.options);
    console.log(`---LOG FROM Dynamic 【${context}】: ${message} ---`);
  }
  error(message: string, context: string) {
    console.log(this.options);
    console.log(`---ERROR FROM Dynamic【${context}】: ${message} ---`);
  }
  warn(message: string, context: string) {
    console.log(this.options);
    console.log(`---WARN FROM Dynamic【${context}】: ${message} ---`);
  }
}
