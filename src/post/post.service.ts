import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from 'src/dtos/create-post.dto';
import { Post } from 'src/entitys/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {

    constructor(@InjectRepository(Post) private postRepo: Repository<Post>, postDto: CreatePostDto){}
    
    async getAll(userId){
        return await this.postRepo.findBy({user: userId});
    }
    async getOne(id, userId){
        return await this.postRepo.findBy({user: userId, id:id})
    }
    async create(CreatePostDto){
        const post = await await this.postRepo.save(CreatePostDto)
        return post
    }
    async delete(id){

        return await this.postRepo.delete({id:id})

    }

}
