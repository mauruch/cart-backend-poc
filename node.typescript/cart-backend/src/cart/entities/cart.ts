import Entity from '../../core/contracts/entity';
import Action  from './action';
import CartItem from './cartItem'
import Price from './price'

interface Cart extends Entity {
    id: string;
    items: Array<CartItem>;
    saved_items: Array<CartItem>;
    shipping_price: Price;
    shipping_action: Action;
    price_label: string;
    price: number;
    checkout_action: Action;
}

export default Cart;