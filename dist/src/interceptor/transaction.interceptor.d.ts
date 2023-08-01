import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Sequelize } from 'sequelize-typescript';
export declare class TransactionInterceptor implements NestInterceptor {
    private sequelize;
    constructor(sequelize: Sequelize);
    intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>>;
}
