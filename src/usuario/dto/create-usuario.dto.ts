/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

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
  @IsNumber()
  seguidoresid: number;

  @IsNotEmpty()
  @IsNumber()
  seguindoid: number;

  @IsNotEmpty()
  @IsString()
  criado_em: string;

  @IsNotEmpty()
  @IsString()
  modificado_em: string;

  @IsNotEmpty()
  @IsNumber()
  tweetid: number;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;
}
