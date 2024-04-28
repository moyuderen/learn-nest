import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
// nest 内置了rxjs包
import { Observable, tap } from 'rxjs';

@Injectable()
export class TimeStatisticsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        return console.log(`After... ${Date.now() - now}ms`);
      }),
    );
  }
}
