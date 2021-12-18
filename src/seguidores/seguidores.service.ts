/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Seguidores } from '.prisma/client';

@Injectable()
export class SeguidoresService {
  constructor(private readonly prisma: PrismaService) {}

  async createPrisma(createSeguidoresDto: CreateSeguidoresDto): Promise<Seguidores> {
    return await this.prisma.seguidores.create({ 
      data: { ...createSeguidoresDto} 
    });
  }

  async findAllPrisma(): Promise<Seguidores[]> {
    return await this.prisma.seguidores.findMany();
  }

  async findOnePrisma(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.findUnique({ 
      where: { id },
    });
  }

  async updateOnePrisma(id: number, updateSeguidoresDto: UpdateSeguidoresDto) {
    return await this.prisma.seguidores.update({ 
      data: { ...updateSeguidoresDto},
      where: { id }, 
    });
  }

  async removeOnePrisma(id: number) {
    return await this.prisma.seguidores.delete({
      where: { id },
    });
  }
}
