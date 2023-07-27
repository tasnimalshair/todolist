import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { TaskModule } from './task/task.module';
import { Task } from './task/task.model';
// import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
// import { User } from './auth/user.model';
import { TokenAuthGuard } from './guard/TokenAuthGuard';
import { GuardModule } from './guard/guard.module';
import configFile from 'config';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './db/db.module';


@Module({
  imports: [
    TaskModule,
    UserModule,
    AuthModule,
    GuardModule,
    DatabaseModule,
    ConfigModule.forRoot({
      load: [configFile],
      isGlobal: true,
    }),

    // SequelizeModule.forRoot({
    //   dialect: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '123',
    //   database: 'tasks',
    //   models: [Task, User],
    // }),


  ],

})
export class AppModule {
}
