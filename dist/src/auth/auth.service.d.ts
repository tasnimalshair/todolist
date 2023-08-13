import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateSignupUserDto } from './dtos/create-signup.dto';
import { CreateSigninUserDto } from './dtos/create-signin.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signup(createSignupUserDto: CreateSignupUserDto, transaction: any): Promise<import("../user/user.model").User>;
    signin(createSigninUserDto: CreateSigninUserDto, transaction: any): Promise<string>;
}
