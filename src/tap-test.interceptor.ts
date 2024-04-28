import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class TapTestInterceptor implements NestInterceptor {
  // 路由中使用可以依赖注入
  @Inject(AppService)
  private readonly appService: AppService;

  private readonly logger = new Logger(TapTestInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        this.appService.getHello();
        this.logger.log(`log something`, data);
      }),
    );
  }
}
