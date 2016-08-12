"use strict";
const cart_1 = require('../entities/cart');
const cartItem_1 = require('../entities/cartItem');
class GetCartTask {
    execute(params) {
        let cartId = params.get('cartId');
        if (cartId === '404') {
            return null;
        }
        let cart = new cart_1.default(cartId);
        cart.items.push(new cartItem_1.default('111'));
        cart.items.push(new cartItem_1.default('222'));
        cart.items.push(new cartItem_1.default('333'));
        return cart;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetCartTask;
//# sourceMappingURL=getCartTask.js.map