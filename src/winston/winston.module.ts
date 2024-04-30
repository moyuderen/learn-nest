import { Module, DynamicModule, Global } from '@nestjs/common';
import { MyLogger } from 'src/MyDynamicLogger';

export const WINSTON_LOGGER_TOKEN = 'WINSTON_LOOGER';

@Global()
@Module({})
export class WinstonModule {
  public static forRoot(options): DynamicModule {
    return {
      module: WinstonModule,
      providers: [
        {
          provide: WINSTON_LOGGER_TOKEN,
          useValue: new MyLogger(options),
        },
      ],
      exports: [WINSTON_LOGGER_TOKEN],
    };
  }
}
