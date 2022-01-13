/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateFavoritosOnUsuarioDto {
    @IsNotEmpty()
    @IsInt()
    usuarioId: number;

    @IsNotEmpty()
    @IsInt()
    tweetId: number;
}
