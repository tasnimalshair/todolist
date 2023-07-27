import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { hashSync, compareSync } from "bcryptjs";
import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService) { }

    async signup(name: string, email: string, password: string) {
        const users = await this.userService.find(email);
        if (users.length) {
            throw new BadRequestException('Email already exists ,please change it.');
        }

        const encryptedPass: string = hashSync(password, 10);

        const user = await this.userService.create(name, email, encryptedPass);

        return user;

    }

    async signin(email: string, password: string) {
        const [user] = await this.userService.find(email);
        if (!user) {
            throw new NotFoundException('User not found.');
        }
        const isPass = compareSync(password, user.password);
        if (!isPass) {
            throw new BadRequestException();
        }
        return await this.jwtService.sign({ id: user.id });
    }
}
