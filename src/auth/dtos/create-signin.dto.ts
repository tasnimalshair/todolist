import { IsNotEmpty, IsString, IsEmail, Matches } from 'class-validator'

export class CreateSigninUserDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Matches(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/)
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string
}