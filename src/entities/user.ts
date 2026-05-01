import { Entity } from "../core/entity.js";

interface IUserProps {
    name: string,
    email: string,
    password: string,
    createdAt: Date
    updatedAt: Date
}

export class User extends Entity<IUserProps> {
    get name() {
        return this.props.name
    }

    get email() {
        return this.props.email
    }

    get createdAt() {
        return this.props.createdAt
    }

    set name(name: string) {
        this.props.name = name
    }

    set email(email: string) {
        this.props.email = email
    }

    touch() {
        this.props.updatedAt = new Date()
    }

    static create(props: IUserProps, id?: string): User {
        return new User(props, id)
    }

}