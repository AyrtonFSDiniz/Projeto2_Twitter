/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class LoginDto {
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
  
    @IsNotEmpty()
    @IsString()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    senha: string;
}