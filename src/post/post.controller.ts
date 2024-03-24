import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from 'src/dtos/create-post.dto';

@Controller('post')
export class PostController {
    constructor(private postService: PostService){}

    @Get(":userId")
    getAll(@Param("userId") userId){
        return this.postService.getAll(userId)
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
    delete(@Param("id"), id){
        return this.postService.delete(id)
    }

}
