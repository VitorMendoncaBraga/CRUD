import { User } from "../entities/user.js";
import { InMemoryUserRepository } from "../repositories/in-memory/user-repository.js";
import { CreateUser } from "./create-user.js";
import { beforeEach, describe, expect, it } from 'vitest'

let userRepository: InMemoryUserRepository
let sut: CreateUser

beforeEach(() => {
    userRepository = new InMemoryUserRepository()
    sut = new CreateUser(userRepository)
})

describe("Create user tests", () => {
    it("should be able to create a user", async () => {
        const user = await sut.execute({ email: "example@email.com", name: "John Doe", password: "123@123" })
        console.log(user)
        expect(userRepository.items).toHaveLength(1)
        expect(userRepository.items[0]).toMatchObject({ name: "John Doe" });
        expect(user.email).toEqual("example@email.com")
    })
})