/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguindoDto {
    @IsInt()
    @IsNotEmpty()
    usuarioId: number;

    @IsNotEmpty()
    @IsInt()
    idSeguindo: number
}
