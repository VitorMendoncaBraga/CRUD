import { randomUUID } from "node:crypto"

export class Entity<Props> {
    constructor(protected props: Props, protected _id?: string){
        this._id = _id ?? randomUUID()
        this.props = props
    }

    get id(){
        return this._id
    }
}