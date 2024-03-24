import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { User } from 'src/entitys/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>, private authService: AuthService){
    }
    
    async getAll(): Promise<User[]>{
        return await this.userRepo.find()
    }
    async create(userDto: CreateUserDto){
        const pass = userDto.password
        const hashPassword = await bcrypt.hash(pass, 10)
        userDto.password = hashPassword
        const user = await this.userRepo.save(userDto)
        return this.authService.signIn(user.id, user.email, user.username, user.password)
    }
    async getOne(id): Promise<User>{

        return this.userRepo.findOneBy({
            id: id
        })
    }
    async delete(id){
            return this.userRepo.delete({
                id: id
            })
    }
}
