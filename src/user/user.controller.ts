import {Body, Controller, Delete, Get, Param, Post, Req,} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from 'src/dtos/create-user.dto';
import {User} from 'src/entitys/user.entity';
import {Request} from "express";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get('/')
    async getAll() {
        return await this.userService.getAll();
    }

    @Post('/create')
    async create(@Body() createUserDto: CreateUserDto, @Req() req: Request) {
        const user = this.userService.create(createUserDto);
        return user;
    }

    @Get(':id')
    async getOne(@Param('id') id: string): Promise<User> {
        return this.userService.getOne(id);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
