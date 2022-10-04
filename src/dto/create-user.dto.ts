import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @MaxLength(11)
    @IsNotEmpty()
    phoneNumber: string
}