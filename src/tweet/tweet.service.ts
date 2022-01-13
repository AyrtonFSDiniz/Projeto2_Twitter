/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Tweet } from '@prisma/client';

@Injectable()
export class TweetService {
  constructor(private readonly prisma: PrismaService) {}

  async createPrisma(createTweetDto: CreateTweetDto): Promise<Tweet> {
    return await this.prisma.tweet.create({
      data: { ... createTweetDto }
    });
  }

  async findAllPrisma(): Promise<Tweet[]> {
    return await this.prisma.tweet.findMany();
  }

  async findOnePrisma(id: number): Promise<Tweet> {
    return await this.prisma.tweet.findUnique({ 
      where: { id }
    });
  }

  async updateOnePrisma(
    id: number, 
    updateTweetDto: UpdateTweetDto
    ): Promise<Tweet> {
    return await this.prisma.tweet.update({ 
      data: { ...updateTweetDto},
      where: { id },
    });
  }

  async removeOnePrisma(id: number) {
    return await this.prisma.tweet.delete({ 
      where: { id },
    });
  }
}
