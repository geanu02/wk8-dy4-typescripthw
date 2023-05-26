"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const index_1 = require("./index");
class Shop {
    constructor(_shopName, _id = (0, uuid_1.v4)(), _products = []) {
        this._shopName = _shopName;
        this._id = _id;
        this._products = _products;
        this.addDefaultItems = () => {
            this._products.push(new index_1.Item("Apple", 1.25, "Granny Smith Apple"));
            this._products.push(new index_1.Item("Orange", 1.05, "Southwest Tangerine"));
            this._products.push(new index_1.Item("Banana", 0.75, "Peruvian Banana"));
        };
        this.addDefaultItems();
    }
    get products() {
        return this._products;
    }
    set products(value) {
        this._products = value;
    }
    get shopName() {
        return this._shopName;
    }
    set shopName(value) {
        this._shopName = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
exports.default = Shop;
//# sourceMappingURL=Shop.js.map