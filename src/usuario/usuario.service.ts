/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {PrismaService } from '../prisma/prisma.service';
import { Usuario } from '@prisma/client'

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async createPrisma(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return await this.prisma.usuario.create({
      data: { ...createUsuarioDto}
    });
  }

  async findAllPrisma(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  async findOnePrisma(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  async updateOnePrisma(
    id: number, 
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    return await this.prisma.usuario.update({
      data: { ...updateUsuarioDto},
      where: { id },
    });
  }

  async removeOnePrisma(id: number) {
    return await this.prisma.usuario.delete({ 
      where: { id },
    });
  }
}
