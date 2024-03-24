import { User } from "src/entitys/user.entity"

export class CreatePostDto{
    header: string
    body: string
    userId: User
}