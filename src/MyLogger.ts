import { LoggerService } from '@nestjs/common';
import { createLogger, Logger, format, transports } from 'winston';
const { combine, colorize, printf, timestamp, json } = format;
import * as chalk from 'chalk';
import * as dayjs from 'dayjs';
import 'winston-daily-rotate-file';

export class MyLogger implements LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: 'debug',
      transports: [
        new transports.Console({
          format: combine(
            colorize(),
            printf(({ context, level, message, time }) => {
              const app = chalk.green('[NEST-Winston]');
              const contextStr = chalk.yellow(`[${context}]`);
              return `\n ${app} - ${time}   ${level} ${contextStr} ${message}`;
            }),
          ),
        }),
        new transports.File({
          format: combine(timestamp(), json()),
          filename: 'winston.log',
          dirname: 'logs',
          maxsize: 1024, // 文件最大，超出自动分文件
        }),
        new transports.DailyRotateFile({
          format: combine(timestamp(), json()),
          filename: 'winston-%DATE%.log',
          dirname: 'logs-date',
          maxSize: '2K',
          datePattern: 'YYYY-MM-DD-HH:mm:ss',
        }),
        new transports.Http({
          host: 'localhost', // 域名
          port: 3000, // 端口
          path: '/reportLog', // 接口地址
          format: json(),
        }),
      ],
      exceptionHandlers: [
        new transports.File({
          filename: 'error.log',
          dirname: 'logs',
        }),
      ],
      rejectionHandlers: [
        new transports.File({
          filename: 'rejection.log',
          dirname: 'logs',
        }),
      ],
    });
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
