import Entity from '../../../core/contracts/entity';
import CartItem_01_00_00 from '../cartItem/cartItem_01_00_00';
import Price_01_00_00 from '../price/price_01_00_00';
import Action_01_00_00 from '../action/Action_01_00_00';

interface Cart_01_00_00 extends Entity {
    id: string;
    items: Array<CartItem_01_00_00>;
    saved_items: Array<CartItem_01_00_00>;
    shipping_price: Price_01_00_00;
    shipping_action: Action_01_00_00;
    price_label: string;
    price: number;
    checkout_action: Action_01_00_00;
}

export default Cart_01_00_00;