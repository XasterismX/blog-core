import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entitys/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
    imports:[TypeOrmModule.forFeature([User]), AuthService],
    providers: [UserService],
    controllers: [UserController],
    exports:[UserService]
})
export class UserModule {}
