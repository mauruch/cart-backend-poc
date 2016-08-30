import Entity from '../../core/contracts/entity';

interface Action extends Entity {
    label: string;
    url: string;
}

export default Action;