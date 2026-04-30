import type { UserRepository } from "../repositories/user-repository.js";

interface IGetUserProps {
    id: string
}

export class GetUser {
    constructor(private userRepository: UserRepository) { }

    async execute({ id }: IGetUserProps) {
        const user = await this.userRepository.findById(id)
        if (!user) {
            throw new Error("User doesnt exists")
        }
        return user
    }
}