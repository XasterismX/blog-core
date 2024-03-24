import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt"
import { AuthDto } from 'src/dtos/auth.dto';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwt: JwtService){}
    async signIn(id, email, username, password):Promise<{access_token: string}>{
        const user = await this.userService.getOne(id)
        if(!bcrypt.compare(password, user.password)){
            throw new UnauthorizedException;
        }
        return {access_token: await this.jwt.signAsync({id, email, username})}
    }

}
