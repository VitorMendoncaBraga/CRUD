import { describe, it, beforeEach, expect } from 'vitest'
import { InMemoryUserRepository } from '../repositories/in-memory/user-repository.js'
import { UpdateUser } from './update-user.js'
import { User } from '../entities/user.js'

let userRepository: InMemoryUserRepository
let sut: UpdateUser

beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    sut = new UpdateUser(userRepository)
})

describe("Update User", () => {
    it("should be able to update a user", async () => {
        const user = User.create({ email: "example@email.com", name: "John Doe", password: "123@123", createdAt: new Date(), updatedAt: new Date() }, "ID-1")
        userRepository.create(user)
        await sut.execute({ id: user.id, email: "teste", name: "teste" })
        expect(userRepository.items[0]).toMatchObject({
            email: "teste", name: "teste"
        })
    })
    it("shouldnt be able to update a user that doesnt exists", async () => {
        expect(async () => {
            await sut.execute({ id: "id-unexisted", email: "teste", name: "teste" })
        }).rejects.toBeInstanceOf(Error)
    })
})