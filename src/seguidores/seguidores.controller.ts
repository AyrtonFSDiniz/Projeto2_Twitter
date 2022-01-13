/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSeguidoresDto: CreateSeguidoresDto) {
    return this.seguidoresService.createPrisma(createSeguidoresDto);
  }

  @Get()
  findAll() {
    return this.seguidoresService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSeguidoresDto: UpdateSeguidoresDto,
  ) {
    return this.seguidoresService.updateOnePrisma(+id, updateSeguidoresDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.seguidoresService.removeOnePrisma(id);
  }
}
