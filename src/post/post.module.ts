import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Post} from "../entitys/post.entity";
import {JwtService} from "@nestjs/jwt";
import {CreatePostDto} from "../dtos/create-post.dto";

@Module({
  imports:[TypeOrmModule.forFeature([Post])],
  providers: [PostService, JwtService, CreatePostDto],
  controllers: [PostController]
})
export class PostModule {}
