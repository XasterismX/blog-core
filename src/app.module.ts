import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entitys/post.entity';
import { Comment } from './entitys/coment.entity';
import { User } from './entitys/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"postgres",
      host:"localhost",
      port:5432,
      username:"postgres",
      password:"root",
      database:"blog",
      entities:[Post, Comment, User],
      synchronize: true,

    }),
    UserModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}
