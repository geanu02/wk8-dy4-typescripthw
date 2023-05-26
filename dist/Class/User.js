"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const types_1 = require("./types");
class User {
    constructor(_name, _age, _cart = [], _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
        this._id = _id;
        // Class Methods 
        this.addToCart = (item) => {
            this.cart.push(item);
            console.log(`Added 1 ${item.name} to cart.`);
        };
        this.removeFromCart = (item) => {
            let countItems = 0;
            this.cart.forEach(e => e == item ? countItems++ : '');
            for (let i = 0; i < countItems; i++) {
                let idx = this.cart.indexOf(item);
                this.cart.splice(idx, 1);
            }
            console.log(`Removed all (${countItems}) ${item.name} from Cart.`);
        };
        this.removeQuantityFromCart = (item, qtyRemove) => {
            for (let i = 0; i < qtyRemove; i++) {
                let idx = this.cart.indexOf(item);
                this.cart.splice(idx, 1);
            }
            console.log(`Removed ${qtyRemove} ${item.name} from Cart.`);
        };
        this.cartTotal = () => {
            let totalCart = 0;
            for (let item of this.cart) {
                totalCart += item.price;
            }
            // Optional: Just to know if totalCart is correct
            // formatterUSD imported from types.ts 
            console.log(`Cart Total: ${types_1.formatterUSD.format(totalCart)}`);
            //console.log(`Cart Total: ${totalCart}`)
            return totalCart;
        };
        this.printCart = () => {
            // idxSign interface imported from types.ts 
            let cartItems = {};
            for (let cartItem of this.cart) {
                if (cartItem.name in cartItems) {
                    cartItems[cartItem.name] += 1;
                }
                else {
                    cartItems[cartItem.name] = 1;
                }
            }
            console.log("Cart:", cartItems);
        };
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map