import Entity from '../../../core/contracts/entity';
import CartItem_01_00_00 from '../cartItem/cartItem_01_00_00';

export default class Cart_01_00_00 implements Entity {
    id: string;
    items: Array<CartItem_01_00_00>;
    note: string;
    fromTask: string;
    marshaller: string;
    
    constructor(id: string) {
        this.id = id;
        this.items = [];
        
        this.note = 'This is Cart_01_00_00';
    }
}