import { Module } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';

@Module({
  providers: [SeguidoresService]
})
export class SeguidoresModule {}
