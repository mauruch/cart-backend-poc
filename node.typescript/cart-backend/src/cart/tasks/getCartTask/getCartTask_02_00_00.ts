
import Task from '../../../core/contracts/task';
import Cart_01_01_00 from '../../entities/cart/cart_01_01_00';
import CartItem_01_00_00 from '../../entities/cartItem/cartItem_01_00_00';
import CartConfig_02_00_00 from '../../config/cartConfig_02_00_00';
import { Promise } from 'es6-promise';

export default class GetCartTask_02_00_00 implements Task<Cart_01_01_00> {
    config: CartConfig_02_00_00 = new CartConfig_02_00_00();

    public async execute(params: Map<string, any>): Promise<Cart_01_01_00> {
        let cartId: string = params.get('cartId');

        if (cartId === '404') {
            return null;
        }
        
        let cart: Cart_01_01_00 = new Cart_01_01_00(cartId);
        cart.fromTask = 'GetCartTask_02_00_00';
        cart.items.push(new CartItem_01_00_00('111'));
        cart.items.push(new CartItem_01_00_00('222'));
        cart.items.push(new CartItem_01_00_00('333'));
        cart.items.push(new CartItem_01_00_00('444'));
        cart.items.push(new CartItem_01_00_00('555'));
        cart.items.push(new CartItem_01_00_00('666'));

        cart.quantity = cart.items.length;
        
        return cart;
    }
}