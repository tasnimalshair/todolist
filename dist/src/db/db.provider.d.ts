import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
export declare const databaseProvider: {
    provide: string;
    useFactory: (configService: ConfigService) => Sequelize;
    inject: (typeof ConfigService)[];
}[];
