/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto {

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  bio: string;

  @IsNotEmpty()
  @IsString()
  nascimento: string;

  @IsNotEmpty()
  @IsString()
  criado_em: string;

  @IsNotEmpty()
  @IsString()
  modificado_em: string;
}
