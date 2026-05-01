import { randomUUID } from "node:crypto"

export class Entity<Props> {
    protected props
    protected _id
    constructor(props: Props ,id?: string){
        this._id = id ?? randomUUID()
        this.props = props
    }

    get id(){
        return this._id
    }
}