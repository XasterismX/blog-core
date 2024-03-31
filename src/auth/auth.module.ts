import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import {UserService} from "../user/user.service";
import {UserModule} from "../user/user.module";

@Module({
    imports: [JwtModule.register({
        privateKey: "Secret",
        verifyOptions: {
            maxAge: "24h"
        }
    }),
        UserModule
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {
}
