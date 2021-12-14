import { Module } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';

@Module({
  providers: [SeguindoService]
})
export class SeguindoModule {}
