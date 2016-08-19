import Marshaller from '../contracts/marshaller';
import Entity from '../contracts/entity';

export default class GenericMarshaller implements Marshaller<Entity> {
    public getJson(entity: Entity): any {
        return entity;
    }
}