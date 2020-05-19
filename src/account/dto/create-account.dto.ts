import { IsNotEmpty } from "class-validator";

export class CreateAccountDTO {
    @IsNotEmpty()
    readonly name: String;
    @IsNotEmpty()
    readonly user: String;
}