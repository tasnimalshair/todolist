import { Controller, Post, HttpCode, HttpStatus, Body, Get, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateSigninUserDto } from './dtos/create-signin.dto';
import { CreateSignupUserDto } from './dtos/create-signup.dto';
import { Public, Transaction } from '../decorators';
import { TransactionInterceptor } from '../interceptor/transaction.interceptor';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @Post()
    @UseInterceptors(TransactionInterceptor)
    async signUp(@Body() userData: CreateSignupUserDto, @Transaction() transaction) {

        const user = await this.authService.signup(userData, transaction);
        return user;
    }

    @Public()
    @Get()
    @UseInterceptors(TransactionInterceptor)
    login(@Body() userData: CreateSigninUserDto, @Transaction() transaction) {
        return this.authService.signin(userData, transaction);
    }

}
