import { v4 as uuidv4 } from "uuid"

export default class Item {
    constructor(
        private _name: string,
        private _price: number,
        private _desc: string,
        private _id: string = uuidv4()
    ){}
    public get desc(): string {
        return this._desc
    }
    public set desc(value: string) {
        this._desc = value
    }
    public get price(): number {
        return this._price
    }
    public set price(value: number) {
        this._price = value
    }
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }
}