import Entity from '../../core/contracts/entity';

export default class CartItem implements Entity {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
}
