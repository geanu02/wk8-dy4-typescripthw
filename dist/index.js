"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./Class/index");
const shop1 = new index_1.Shop("Shop1");
const user1 = new index_1.User("Gian", 27);
user1.addToCart(shop1.products[0]);
user1.addToCart(shop1.products[1]);
user1.addToCart(shop1.products[1]);
user1.addToCart(shop1.products[1]);
user1.addToCart(shop1.products[2]);
user1.addToCart(shop1.products[2]);
user1.addToCart(shop1.products[2]);
user1.cartTotal();
user1.printCart();
user1.removeFromCart(shop1.products[1]);
user1.cartTotal();
user1.printCart();
user1.removeQuantityFromCart(shop1.products[2], 2);
user1.cartTotal();
user1.printCart();
//# sourceMappingURL=index.js.map