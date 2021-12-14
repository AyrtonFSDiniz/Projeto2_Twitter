import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TweetModule, SeguindoModule, SeguidoresModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
