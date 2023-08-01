import { IsNotEmpty, IsString, IsEmail, Matches } from 'class-validator'

export class CreateSigninUserDto {


    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @Matches(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/)
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string

}