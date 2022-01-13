import { PartialType } from '@nestjs/swagger';
import { CreateFavoritosOnUsuarioDto } from './create-favoritos-on-usuario.dto';

export class UpdateFavoritosOnUsuarioDto extends PartialType(CreateFavoritosOnUsuarioDto) {}
