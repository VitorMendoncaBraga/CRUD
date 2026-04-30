import { User } from "../entities/user.js";
import type { UserRepository } from "../repositories/user-repository.js";
import { hash } from 'bcryptjs'

interface CreateUserProps {
    name: string,
    email: string,
    password: string
}

export class CreateUser {
    constructor(private userRepository: UserRepository) { }

    async execute({ email, name, password }: CreateUserProps): Promise<User> {
        const hasUserWithSameEmail = await this.userRepository.findByEmail(email)
        if (hasUserWithSameEmail) {
            throw new Error("User already exists")
        }
        const numberOfSalts = 10
        const hashedPassword = await hash(password, numberOfSalts)
        const user = User.create({ name, email, password: hashedPassword, createdAt: new Date(), updatedAt: new Date() })
        await this.userRepository.create(user)
        return user
    }
}