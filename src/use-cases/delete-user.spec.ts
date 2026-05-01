import { describe, it, beforeEach, expect } from 'vitest'
import { InMemoryUserRepository } from '../repositories/in-memory/user-repository.js'
import { DeleteUser } from './delete-user.js'
import { User } from '../entities/user.js'

let userRepository: InMemoryUserRepository
let sut: DeleteUser

beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    sut = new DeleteUser(userRepository)
})

describe("Delete User", () => {
    it("should be able to delete a user", async () => {
        const user = User.create({ email: "example@email.com", name: "John Doe", password: "123@123", createdAt: new Date(), updatedAt: new Date() }, "ID-1")
        userRepository.create(user)
        const user2 = User.create({ email: "example@email.com", name: "John Doe", password: "123@123", createdAt: new Date(), updatedAt: new Date() }, "ID-2")
        userRepository.create(user2)
        await sut.execute({ id: user2.id })
        expect(userRepository.items).toHaveLength(1)
    })
    it("shouldnt be able to delete a user that doesnt exists", async () => {
        expect(async () => {
            await sut.execute({ id: "id-unexisted" })
        }).rejects.toBeInstanceOf(Error)
    })
})