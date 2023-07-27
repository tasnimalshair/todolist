import { AuthService } from './auth.service';
import { CreateSigninUserDto } from './dtos/create-signin.dto';
import { CreateSignupUserDto } from './dtos/create-signup.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(userData: CreateSignupUserDto): Promise<import("../user/user.model").User>;
    login(userData: CreateSigninUserDto): Promise<string>;
}
