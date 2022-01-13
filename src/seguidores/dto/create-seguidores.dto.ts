/* eslint-disable prettier/prettier */
import {IsInt, IsNotEmpty} from 'class-validator';

export class CreateSeguidoresDto {
    @IsNotEmpty()
    @IsInt()
    usuarioId: number;

    @IsNotEmpty()
    @IsInt()
    idSeguidor: number;
}
