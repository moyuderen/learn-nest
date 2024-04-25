import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // useClass
    {
      provide: AppService,
      useClass: AppService,
    },
    // 使用固定值
    {
      provide: 'person1',
      useValue: {
        name: '星光榴莲鸡',
        age: 18,
      },
    },
    // 函数工厂模式
    {
      provide: 'person2',
      useFactory() {
        return {
          name: '星光榴莲鸡',
          age: 18,
        };
      },
    },
    // 函数工厂模式 可传参数
    {
      provide: 'person3',
      useFactory(person1, appService) {
        return {
          name: person1.name,
          desc: appService.getHello(),
        };
      },
    },
    // 函数工厂模式 支持异步
    {
      provide: 'person4',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });
        return {
          name: '星光榴莲鸡',
          age: 18,
        };
      },
    },
    // 别名
    {
      provide: 'person5',
      useExisting: 'person1',
    },
  ],
})
export class AppModule {}
