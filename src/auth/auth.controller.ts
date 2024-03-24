import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from 'src/dtos/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post("login")
    signIn(@Body() authDto: AuthDto){
        return this.authService.signIn(authDto.id,authDto.email, authDto.username, authDto.password)
    }
}
