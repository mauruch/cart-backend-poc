import Marshaller from '../contracts/marshaller';
import Entity from '../contracts/entity';
import CartMarshaller from '../../cart/marshallers/cartMarshaller';
import VoidMarshaller from '../marshallers/voidMarshaller';

export default class MarshallerLocatorService {
    public get(entity: Entity): Marshaller<Entity> {
        let className: string = entity.constructor.name;

		if (className == 'Cart') {
			return new CartMarshaller();
		}

		if (className == 'Void') {
			return new VoidMarshaller();
		}

		return null;
    }
}