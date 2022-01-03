/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguindoDto {
    @IsNotEmpty()
    @IsInt()
    usuarioid: number;

    @IsNotEmpty()
    @IsInt()
    idSeguindo: number
}
