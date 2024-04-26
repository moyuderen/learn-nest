import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';
import { DddModule } from './ddd/ddd.module';

@Module({
  imports: [
    BbbModule.register({
      name: 'hanmeimei',
      age: 18,
    }),
    CccModule.registerAsync({
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        return {
          name: 'lilei',
          age: 20,
        };
      },
    }),
    DddModule.register({
      name: '小明',
      age: 17,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
