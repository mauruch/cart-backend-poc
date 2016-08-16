import Entity from '../../../core/contracts/entity';

export default class CartItem implements Entity {
    id: string;
    note: string;

    constructor(id: string) {
        this.id = id;

        this.note = 'This is CartItem_01_00_00';
    }
}
