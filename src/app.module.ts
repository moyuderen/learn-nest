import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    // 1.对所有路由
    // .forRoutes('*')

    // 2.某个路由，特定方法
    // .forRoutes({ path: 'cats', method: RequestMethod.GET })

    // 3.通配符
    // .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });

    // 4.控制器
    // .forRoutes(CatsController);

    // 5.多个路由
    // .exclude(
    //   { path: 'cats', method: RequestMethod.GET },
    //   { path: 'cats', method: RequestMethod.POST },
    //   'cats/(.*)',
    // )
    // .forRoutes(CatsController);

    // 多个中间件
    // consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
  }
}
