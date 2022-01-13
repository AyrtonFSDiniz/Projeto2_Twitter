/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.createPrisma(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOnePrisma(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.updateOnePrisma(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.usuarioService.removeOnePrisma(+id);
  }
}
