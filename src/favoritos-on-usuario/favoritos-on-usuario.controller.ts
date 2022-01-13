/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FavoritosOnUsuarioService } from './favoritos-on-usuario.service';
import { CreateFavoritosOnUsuarioDto } from './dto/create-favoritos-on-usuario.dto';
import { UpdateFavoritosOnUsuarioDto } from './dto/update-favoritos-on-usuario.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('favoritos-on-usuario')
export class FavoritosOnUsuarioController {
  constructor(private readonly favoritosOnUsuarioService: FavoritosOnUsuarioService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createFavoritosOnUsuarioDto: CreateFavoritosOnUsuarioDto) {
    return this.favoritosOnUsuarioService.createPrisma(createFavoritosOnUsuarioDto);
  }

  @Get()
  findAll() {
    return this.favoritosOnUsuarioService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritosOnUsuarioService.findOnePrisma(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateFavoritosOnUsuarioDto: UpdateFavoritosOnUsuarioDto) {
    return this.favoritosOnUsuarioService.updateOnePrisma(+id, updateFavoritosOnUsuarioDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.favoritosOnUsuarioService.removeOnePrisma(+id);
  }
}
