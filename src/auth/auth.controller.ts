import {Body, Controller, Post, Req} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../dtos/create-user.dto";
import {Request} from "express";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post("/login")
    login(@Body() userDto: CreateUserDto){
        return this.authService.login(userDto)
    }

    @Post("/registration")
    registration(@Body() userDto: CreateUserDto){

        const user = this.authService.registration(userDto)
        return user
    }

}
