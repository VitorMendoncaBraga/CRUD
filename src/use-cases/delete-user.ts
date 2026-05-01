import type { UserRepository } from "../repositories/user-repository.js";

interface IDeleteUserProps {
    id: string
}

export class DeleteUser {
    constructor(private userRepository: UserRepository) { }

    async execute({ id }: IDeleteUserProps) {
        const user = await this.userRepository.findById(id)
        if (!user) {
            throw new Error("User doesnt exists")
        }
        await this.userRepository.delete(user)
    }
}