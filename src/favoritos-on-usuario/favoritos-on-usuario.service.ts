/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoritosOnUsuarioDto } from './dto/create-favoritos-on-usuario.dto';
import { UpdateFavoritosOnUsuarioDto } from './dto/update-favoritos-on-usuario.dto';
import { FavoritosOnUsuario } from './entities/favoritos-on-usuario.entity';

@Injectable()
export class FavoritosOnUsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async createPrisma(createFavoritosOnUsuarioDto: CreateFavoritosOnUsuarioDto): Promise<FavoritosOnUsuario> {
    return await this.prisma.favoritosOnUsuario.create({
      data: { ...createFavoritosOnUsuarioDto}
    });
  }

  async findAllPrisma(): Promise<FavoritosOnUsuario[]> {
    return await this.prisma.favoritosOnUsuario.findMany();
  }

  async findOnePrisma(id: number): Promise<FavoritosOnUsuario> {
    return await this.prisma.favoritosOnUsuario.findUnique({ 
      where: { id }
    });
  }

  async updateOnePrisma(
    id: number, 
    updateFavoritosOnUsuarioDto: UpdateFavoritosOnUsuarioDto
    ): Promise<FavoritosOnUsuario> {
    return await this.prisma.favoritosOnUsuario.update({ 
      data: { ...updateFavoritosOnUsuarioDto},
      where: { id },
    });
  }

  async removeOnePrisma(id: number) {
    return await this.prisma.favoritosOnUsuario.delete({ 
      where: { id },
    });
  }
}

