import { v4 as uuidv4 } from "uuid"
import { Item } from "./index"
import { idxSign, formatterUSD } from "./types"

export default class User {
    constructor(
        private _name: string,
        private _age: number,
        private _cart: Item[] = [],
        private _id: string = uuidv4()
    ){}
    public get cart(): Item[] {
        return this._cart
    }
    public set cart(value: Item[]) {
        this._cart = value
    }
    public get age(): number {
        return this._age
    }
    public set age(value: number) {
        this._age = value
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

    // Class Methods 
    public addToCart = (item: Item): void => {
        this.cart.push(item)
        console.log(`Added 1 ${item.name} to cart.`)
    }
    public removeFromCart = (item: Item): void => {
        let countItems: number = 0
        this.cart.forEach(e => e == item ? countItems++ : '')
        for (let i = 0; i < countItems; i++) {
            let idx = this.cart.indexOf(item)
            this.cart.splice(idx, 1)
        }
        console.log(`Removed all (${countItems}) ${item.name} from Cart.`)
    }
    public removeQuantityFromCart = (item: Item, qtyRemove: number): void => {
        for (let i = 0; i < qtyRemove; i++) {
            let idx = this.cart.indexOf(item)
            this.cart.splice(idx, 1)
        }
        console.log(`Removed ${qtyRemove} ${item.name} from Cart.`)
    }
    public cartTotal = (): number => {
        let totalCart: number = 0
        for (let item of this.cart) {
            totalCart += item.price
        }
        // Optional: Just to know if totalCart is correct
        // formatterUSD imported from types.ts 
        console.log(`Cart Total: ${formatterUSD.format(totalCart)}`)
        //console.log(`Cart Total: ${totalCart}`)
        return totalCart
    }
    public printCart = (): void => {
        // idxSign interface imported from types.ts 
        let cartItems: idxSign = {}
        for (let cartItem of this.cart) {
            if (cartItem.name in cartItems) {
                cartItems[cartItem.name] += 1
            } else {
                cartItems[cartItem.name] = 1
            }
        }
        console.log("Cart:", cartItems)
    }
}