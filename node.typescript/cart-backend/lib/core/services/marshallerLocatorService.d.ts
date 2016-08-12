import Marshaller from '../contracts/marshaller';
import Entity from '../contracts/entity';
export default class MarshallerLocatorService {
    get(entity: Entity): Marshaller<Entity>;
}
