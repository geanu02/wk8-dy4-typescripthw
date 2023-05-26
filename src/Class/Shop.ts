import { v4 as uuidv4 } from "uuid"
import { Item } from "./index"

export default class Shop {
    constructor(
        private _shopName: string,
        private _id: string = uuidv4(),
        private _products: Item[] = []
    ){
        this.addDefaultItems()
    }
    public get products(): Item[] {
        return this._products
    }
    public set products(value: Item[]) {
        this._products = value
    }
    public get shopName(): string {
        return this._shopName
    }
    public set shopName(value: string) {
        this._shopName = value
    }
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }

    private addDefaultItems = (): void => {
        this._products.push(new Item("Apple", 1.25, "Granny Smith Apple"))
        this._products.push(new Item("Orange", 1.05, "Southwest Tangerine"))
        this._products.push(new Item("Banana", 0.75, "Peruvian Banana"))
    }
}