import { LoggerService } from '@nestjs/common';

export class MyLogger implements LoggerService {
  log(message: string, context: string) {
    console.log(`---LOG 【${context}】: ${message} ---`);
  }
  error(message: string, context: string) {
    console.log(`---ERROR 【${context}】: ${message} ---`);
  }
  warn(message: string, context: string) {
    console.log(`---WARN 【${context}】: ${message} ---`);
  }
}
