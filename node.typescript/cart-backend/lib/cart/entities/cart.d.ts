import Entity from '../../core/contracts/entity';
import CartItem from './cartItem';
export default class Cart implements Entity {
    id: string;
    items: Array<CartItem>;
    constructor(id: string);
}
