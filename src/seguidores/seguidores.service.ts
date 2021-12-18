import { Injectable } from '@nestjs/common';
import { CreateSeguidoreDto } from './dto/create-seguidore.dto';
import { UpdateSeguidoreDto } from './dto/update-seguidore.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Seguidores } from '.prisma/client';

@Injectable()
export class SeguidoresService {
  async create(createSeguidoreDto: CreateSeguidoreDto): Promise<Seguidores> {
    return await this.prisma.seguidores.create({ data });
  }

  async findAll(): Promise<Seguidores> {
    return await this.prisma.seguidores.findMany();
  }

  async findOne(id: number): Promise<Seguidores> {
    return await this.prisma.seguidores.findUnique({ data, where: { id } });
  }

  async update(id: number, updateSeguidoreDto: UpdateSeguidoreDto) {
    return await this.prisma.seguidores.update({ data, where: { id } });
  }

  async remove(id: number) {
    return `This action removes a #${id} seguidores`;
  }
}
