import Entity from './entity';

interface Marshaller<Entity> {
    getJson(entity: Entity): any;
}

export default Marshaller;