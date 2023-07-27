import { Controller, Post, HttpCode, HttpStatus, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateSigninUserDto } from './dtos/create-signin.dto';
import { CreateSignupUserDto } from './dtos/create-signup.dto';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post()
    signUp(@Body() userData: CreateSignupUserDto) {
        return this.authService.signup(userData.name, userData.email, userData.password);
    }

    @Get()
    login(@Body() userData: CreateSigninUserDto) {
        return this.authService.signin(userData.email, userData.password);
    }

    // @Get('/aaa')
    // get(){
    //     return 'aaaaa';
    // }
}
