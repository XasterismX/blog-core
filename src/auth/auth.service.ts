import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../dtos/create-user.dto";
import {UserService} from "../user/user.service";
import * as bcrypt from "bcrypt"
import {User} from "../entitys/user.entity";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwt: JwtService) {
    }

    async login(userDto: CreateUserDto) {
        const user = await this.verifyUser(userDto)
        return await this.generateJwt(user)
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.findUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException("Пользователь существует", HttpStatus.BAD_REQUEST)
        }
        const hashedPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.create({...userDto, password: hashedPassword})
        return await this.generateJwt(user)
    }

    private async generateJwt(user: User) {
        const payload = {email: user.email, username: user.username, id: user.id}
        return {
            token: this.jwt.sign(payload)
        }
    }

    private async verifyUser(userDto: CreateUserDto) {
        const user = await this.userService.findUserByEmail(userDto.email)
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if (user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: "Ошибка доступа"})
    }
}
