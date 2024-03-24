import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from './constant';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            global: true,
            secret: jwtSecret.secret,
            signOptions:{expiresIn:"10m"}
        })
    ],
    providers:[AuthService],
    controllers: [AuthController],
    exports:[AuthService]
})
export class AuthModule {}
