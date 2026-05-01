import type { UserRepository } from "../repositories/user-repository.js";

interface IUpdateUser {
    id: string,
    name: string,
    email: string,
}

export class UpdateUser {
    constructor(private userRepository: UserRepository) { }
    async execute({ email, id, name }: IUpdateUser) {
        const user = await this.userRepository.findById(id)
        if(!user){
            throw new Error("User doesnt exists")
        }
        user.email = email
        user.name = name
        await this.userRepository.update(user)
    }
}