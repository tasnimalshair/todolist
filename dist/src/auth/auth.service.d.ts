import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signup(name: string, email: string, password: string): Promise<import("../user/user.model").User>;
    signin(email: string, password: string): Promise<string>;
}
