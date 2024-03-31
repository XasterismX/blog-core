import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {CreateUserDto} from 'src/dtos/create-user.dto';
import {User} from 'src/entitys/user.entity';
import {Repository} from 'typeorm';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>,) {
    }

    async getAll(): Promise<User[]> {
        return await this.userRepo.find()
    }

    async create(userDto: CreateUserDto) {
        const user = await this.userRepo.save(userDto)
        return user

    }

    async getOne(id): Promise<User> {

        return this.userRepo.findOneBy({
            id: id
        })
    }

    async findUserByEmail(email: string) {
        return await this.userRepo.findOneBy({email})
    }

    async delete(id) {
        return this.userRepo.delete({
            id: id
        })
    }
}
