import { Injectable } from '@nestjs/common';
import {User} from "../entitys/user.entity";
import {Post} from "../entitys/post.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Comment} from "../entitys/coment.entity";
import {Repository} from "typeorm";
import {CreateCommentDto} from "../dtos/create-comment.dto";

@Injectable()
export class CommentService {

    constructor(@InjectRepository(Comment) private comment: Repository<Comment>) {}

    getAll(author: User, post: Post){

        if(author && post){
            return this.comment.findBy({author, post})
        }
        else if(author){
            return this.comment.findBy({author})
        }
        else if(post){
            return  this.comment.findBy({post})
        }
        return  this.comment.find()
    }
    getOne(id){
        return this.comment.findBy({id: id})
    }
    create(commentDto: CreateCommentDto){
        return this.comment.save(commentDto)
    }
    delete(id){
        return this.comment.delete({id})
    }
}
