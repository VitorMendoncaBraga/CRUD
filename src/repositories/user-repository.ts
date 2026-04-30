import type { User } from "../entities/user.js";


export interface UserRepository {
    create(user: User) : Promise<void>
    update(user: User): Promise<void>
    findByEmail(email: string): Promise<User | null>
    findById(id: string): Promise<User | null>
    delete(user: User): Promise<void>
}