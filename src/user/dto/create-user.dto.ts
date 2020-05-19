import { IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    readonly name: String;
}