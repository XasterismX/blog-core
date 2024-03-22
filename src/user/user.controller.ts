import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get("/")
    async getAll(){
        return await this.userService.getAll()
    }
    @Post("/create")
    async create(@Body() createUserDto: CreateUserDto){
        const user = this.userService.create(createUserDto)
        return user;
    }

}
