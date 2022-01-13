/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { FavoritosOnUsuarioModule } from './favoritos-on-usuario/favoritos-on-usuario.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    TweetModule,
    SeguindoModule,
    SeguidoresModule,
    AuthModule,
    PrismaModule,
    PrismaModule,
    UsuarioModule,
    FavoritosOnUsuarioModule,
    CategoriasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
