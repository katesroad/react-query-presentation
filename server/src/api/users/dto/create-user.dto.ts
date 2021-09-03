import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsString()
  @IsEmail()
  email: string;
}
