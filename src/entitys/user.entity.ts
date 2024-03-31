import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number
    @Column({nullable: false,unique: true})
    username: string
    @Column({unique: true, nullable:false})
    email: string
    @Column({nullable:false})
    password: string
    @OneToMany(() => Post, (posts) => posts.user)
    posts: Post
}