import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryUserRepository } from '../repositories/in-memory/user-repository.js'
import { GetUser } from './get-user.js'
import { User } from '../entities/user.js'

let userRepository: InMemoryUserRepository
let sut: GetUser

beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    sut = new GetUser(userRepository)
})

describe("Get user use case", () => {
    it("should be able to get user", async () => {
        const createdUser = User.create({ name: "John Doe", email: "example@email.com", password: "123@123", createdAt: new Date(), updatedAt: new Date() }, "id-1")
        await userRepository.create(createdUser)
        const user = await sut.execute({ id: 'id-1' })
        expect(user).toMatchObject({ name: "John Doe" })
    })
    it("shouldnt be able to get user when it doesnt exists", async () => {
        expect(async () => {
            await sut.execute({ id: 'id-1' })
        }).rejects.toBeInstanceOf(Error)
    })
})