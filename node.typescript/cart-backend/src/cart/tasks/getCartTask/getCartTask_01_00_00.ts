import Task from '../../../core/contracts/task';
import Cart_01_00_00 from '../../entities/cart/cart_01_00_00';
import CartItem_01_00_00 from '../../entities/cartItem/cartItem_01_00_00';
import CartConfig_01_00_00 from '../../config/cartConfig_01_00_00';
import { Promise } from 'es6-promise';

export default class GetCartTask_01_00_00 implements Task<Cart_01_00_00> {
    config: CartConfig_01_00_00 = new CartConfig_01_00_00();

    execute(params: Map<string, any>): Cart_01_00_00 {
        let cartId: string = params.get('cartId');

        if (cartId === '404') {
            return null;
        }
        
        let cart: Cart_01_00_00 = new Cart_01_00_00(cartId);
        cart.fromTask = 'GetCartTask_01_00_00';
        cart.items.push(new CartItem_01_00_00('111'));
        cart.items.push(new CartItem_01_00_00('222'));
        cart.items.push(new CartItem_01_00_00('333'));

        return cart;
    }

    protected async getSome(): Promise<string> {
        return new Promise<string>(() => { return 'some'});
    }

    protected async getThing(): Promise<string> {
        return new Promise<string>(() => { return 'thing'});
    }
}