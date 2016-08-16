import Entity from '../../../core/contracts/entity';
import Cart_01_00_00 from './cart_01_00_00';
import CartItem_01_00_00 from '../cartItem/cartItem_01_00_00';

export default class Cart_01_01_00 extends Cart_01_00_00 {
    quantity: number;
    
    constructor(id: string) {
        super(id);
        
        this.note = 'This is Cart_01_01_00';
    }
}