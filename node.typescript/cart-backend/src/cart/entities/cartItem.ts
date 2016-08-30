import Entity from '../../core/contracts/entity';
import Price from './price';
import Action from './action'

interface CartItem extends Entity {
    id: string;
    title: string;
    picture_url: string;
    attributes: any;
    permalink: string;
    shipping_label: string;
    payment_label: string;
    quantity: string;
    stock: string;
    discount_rate: string;
    original_price: Price;
    price: Price;
    checkout_action: Action;
    disabled_label: string;
    disabled_action: Action;
}

export default CartItem;