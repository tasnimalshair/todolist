import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
// import { User } from './user.model';
import { UserProvider } from '../user/user.provider';
import { UserModule } from 'src/user/user.module';
require('dotenv').config();




@Module({
  imports: [
  JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRE },
    
  }),
  UserModule
  ],
  providers: [AuthService, ...UserProvider],
  controllers: [AuthController],
})
export class AuthModule {}
