/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Seguindo } from '@prisma/client'

@Injectable()
export class SeguindoService {
  constructor(private readonly prisma: PrismaService) {}

  async createPrisma(createSeguindoDto: CreateSeguindoDto): Promise<Seguindo> {
    return await this.prisma.seguindo.create({
      data: { ... createSeguindoDto },
    });
  }

  async findAllPrisma(): Promise<Seguindo[]> {
    return await this.prisma.seguindo.findMany();
  }

  async findOnePrisma(id: number) {
    return await this.prisma.seguindo.findUnique({ where: { id } });
  }

  async updateOnePrisma(
    id: number, 
    updateSeguindoDto: UpdateSeguindoDto,
    ): Promise<Seguindo> {
    return await this.prisma.seguindo.update({
      data: { ...updateSeguindoDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.seguindo.delete({ where: { id } });
  }
}
