import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";


@Entity()
export class Comment{

    @PrimaryGeneratedColumn()
    if:number
    @Column({nullable: false, length:512})
    text: string
    @Column({default: 0})
    likes: number
    @ManyToOne(()=> Post, { eager: true })
    post: Post

}