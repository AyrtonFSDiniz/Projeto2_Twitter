/* eslint-disable prettier/prettier */
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUsuarioDto {
    @IsString()
    nome: string;

    @IsString()
    imagem: string;

    @IsString()
    bio: string;

    @IsDateString()
    nascimento: string;

    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    senha: string;
}
