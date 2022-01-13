/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Categoria } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  async createPrisma(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    return await this.prisma.categoria.create({
      data: { ...createCategoriaDto}
    });
  }

  async findAllPrisma(): Promise<Categoria[]> {
    return await this.prisma.categoria.findMany();
  }

  async findOnePrisma(id: number): Promise<Categoria> {
    return await this.prisma.categoria.findUnique({ 
      where: { id }
    });
  }

  async updateOnePrisma(
    id: number, 
    updateCategoriaDto: UpdateCategoriaDto
    ): Promise<Categoria> {
    return await this.prisma.categoria.update({ 
      data: { ...updateCategoriaDto},
      where: { id },
    });
  }

  async removeOnePrisma(id: number) {
    return await this.prisma.categoria.delete({ 
      where: { id },
    });
  }
}
