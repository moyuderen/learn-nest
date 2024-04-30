import { LoggerService } from '@nestjs/common';
import { createLogger, Logger } from 'winston';
import * as dayjs from 'dayjs';

export class MyLogger implements LoggerService {
  private logger: Logger;

  constructor(options) {
    this.logger = createLogger(options);
  }

  log(context: string, message: string) {
    this.logger.info(message, { context, time: formatTime() });
  }
  error(context: string, message: string) {
    this.logger.error(message, { context, time: formatTime() });
  }
  warn(context: string, message: string) {
    this.logger.warn(message, { context, time: formatTime() });
  }
}

function formatTime() {
  return dayjs().format('YYYY/MM/DD HH:mm:ss');
}
