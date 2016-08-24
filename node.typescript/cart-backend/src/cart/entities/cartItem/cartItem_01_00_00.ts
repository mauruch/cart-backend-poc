import Entity from '../../../core/contracts/entity';
import Price_01_00_00 from '../price/Price_01_00_00';
import Action_01_00_00 from '../action/Action_01_00_00'

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
    original_price: Price_01_00_00;
    price: Price_01_00_00;
    checkout_action: Action_01_00_00;
    disabled_label: string;
    disabled_action: Action_01_00_00;
}

export default CartItem;