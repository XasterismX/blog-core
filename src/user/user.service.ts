import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { User } from 'src/entitys/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>){
    }
    
    async getAll(): Promise<User[]>{
        return await this.userRepo.find()
    }
    async create(userDto: CreateUserDto){
        const pass = userDto.password
        const hashPassword = await bcrypt.hash(pass, 10)
        userDto.password = hashPassword
        return this.userRepo.save(userDto)
    }
}
