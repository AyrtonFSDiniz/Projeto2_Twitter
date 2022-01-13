/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FavoritosOnUsuarioService } from './favoritos-on-usuario.service';
import { FavoritosOnUsuarioController } from './favoritos-on-usuario.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FavoritosOnUsuarioController],
  providers: [FavoritosOnUsuarioService],
  imports: [PrismaModule],
})
export class FavoritosOnUsuarioModule {}
