import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { TweetModule } from './tweet/tweet.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { AuthModule } from './auth/auth.module';
import { PrimaModule } from './prima/prima.module';
import { SeguidoresModule } from './seguidores/seguidores.module';

@Module({
  imports: [TweetModule, SeguindoModule, SeguidoresModule, AuthModule, PrimaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
