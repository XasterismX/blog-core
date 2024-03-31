import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./coment.entity";
import { User } from "./user.entity";


@Entity()

export class Post{
    @PrimaryGeneratedColumn()
    id: number
    @Column({nullable: false, length:256})
    header: string
    @Column({nullable: false, length:5000})
    body: string
    @Column({type: "bigint", nullable: false, default: Date.now()})
    createdTime: Date
    @ManyToOne(()=> Post, (posts) => posts.user)
    user: User

}