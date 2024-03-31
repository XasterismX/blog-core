import {Body, Controller, Delete, Get, Param, Post, Req} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from 'src/dtos/create-post.dto';
import {Request} from "express";
import {JwtService} from "@nestjs/jwt";

@Controller('post')
export class PostController {
    constructor(private postService: PostService, private jwt: JwtService){}

    @Get("/getAll")
    getAll(@Req() request: Request){
        const token = request.headers.authorization.split(" ")[1]
        const {id} = this.jwt.decode(token)
        return this.postService.getAll(id)
    }
    @Get(":userId/:id")
    getOne(@Param("userId") userId, @Param("id") id){
        return this.postService.getOne(id, userId)
    }
    @Post("create")
    create(@Body() postDto: CreatePostDto){
        return this.postService.create(postDto)
    }
    @Delete("delete/:id")
    delete(@Param("id") id: number){
        return this.postService.delete(id)
    }

}
