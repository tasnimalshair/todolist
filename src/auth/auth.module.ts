import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserProvider } from '../user/user.provider';
import { UserModule } from '../user/user.module';
import { DatabaseModule } from 'src/db/db.module';
require('dotenv').config();

@Module({
  imports: [
  JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRE },
    
  }),
  UserModule,
  DatabaseModule
  ],
  providers: [AuthService, ...UserProvider],
  controllers: [AuthController],
})
export class AuthModule {}
