/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {PrismaService } from '../prisma/prisma.service';
import { Usuario, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  //Criando validação de login e senha de acesso do usário

  async createPrisma(data: Prisma.UsuarioCreateInput): Promise<Usuario> { //prometendo que vai trazer pra ele o que está na model do schema
    data.senha = await bcrypt.hash(data.senha, 10);
    return await this.prisma.usuario.create({ data });
  }

  async findByLogin(login: CreateUsuarioDto): Promise<Usuario> { 
    const user = await this.prisma.usuario.findFirst({ //comunicação com o banco que traz o usuario
      where: { 
        email: login.email, //vai trazer o primeiro email que bater com o email que o cara passou, por causa do findFirst
      },
    });

    if(!user) {
      throw new HttpException(
        'Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
  
  
    const senhaIgual = await bcrypt.compare(login.senha, user.senha) //comparando a senha que foi passada, co ma senha que temos no banco
  
    if(!senhaIgual){
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  
    return user; //se passou por todas as validações, então tá ok. Aí eu vou devolver esse usuário
  }

  //Retornando a lista de usuários
  async findAllPrisma(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  //Retornando apenas um usuário, de acordo com o id passado
  async findOnePrisma(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  //Editando um usuário, de acordo com o id passado
  async updateOnePrisma(
    id: number, 
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    return await this.prisma.usuario.update({
      data: { ...updateUsuarioDto},
      where: { id },
    });
  }

  //Deletando um usuário, de acordo com o id passado
  async removeOnePrisma(id: number) {
    return await this.prisma.usuario.delete({ 
      where: { id },
    });
  }
}
