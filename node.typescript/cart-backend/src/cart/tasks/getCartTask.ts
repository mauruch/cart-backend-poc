import Task from '../../core/contracts/task';
import Cart from '../entities/cart';
import CartItem from '../entities/cartItem';

export default class GetCartTask implements Task<Cart> {
    execute(params: Map<string, any>): Cart {
        let cartId: string = params.get('cartId');

        if (cartId === '404') {
            return null;
        }
        
        let cart: Cart = new Cart(cartId);
        cart.items.push(new CartItem('111'));
        cart.items.push(new CartItem('222'));
        cart.items.push(new CartItem('333'));

        return cart;
    }
}