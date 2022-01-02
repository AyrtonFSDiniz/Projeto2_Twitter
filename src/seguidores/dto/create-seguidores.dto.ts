/* eslint-disable prettier/prettier */
import {IsInt, IsNotEmpty} from 'class-validator';

export class CreateSeguidoresDto {
    @IsInt()
    @IsNotEmpty()
    usuarioId: number;

    @IsNotEmpty()
    @IsInt()
    idSeguidor: number;
}
