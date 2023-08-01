import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject } from '@nestjs/common';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Transaction } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  constructor(
    @Inject('sequelize')
    private sequelize: Sequelize) { }

  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();

    const transaction = await this.sequelize.transaction();
    req.transaction = transaction;

    return next.handle().pipe(
      tap(() => {
        transaction.commit();
      }),
      catchError(err => {
        transaction.rollback();
        throw new Error(err);
      })
    );
  }
}
