"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(_name, _price, _desc, _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._price = _price;
        this._desc = _desc;
        this._id = _id;
    }
    get desc() {
        return this._desc;
    }
    set desc(value) {
        this._desc = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
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
exports.default = Item;
//# sourceMappingURL=Item.js.map