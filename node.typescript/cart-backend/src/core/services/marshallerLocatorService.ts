import Marshaller from '../contracts/marshaller';
import Entity from '../contracts/entity';
import CartMarshaller_01_00_00 from '../../cart/marshallers/cartMarshaller/cartMarshaller_01_00_00';
import CartMarshaller_01_00_01 from '../../cart/marshallers/cartMarshaller/cartMarshaller_01_00_01';
import VoidMarshaller from '../marshallers/voidMarshaller';
import { SemVer } from 'semver';
import * as semver from 'semver'

export default class MarshallerLocatorService {
    public get(entity: Entity, version: SemVer): Marshaller<Entity> {
        let className: string = entity.constructor.name;

		if (className.startsWith('Cart_')) {
			if (version.compare(new SemVer('1.0.0')) === 0) {
				return new CartMarshaller_01_00_00();
			}
			return new CartMarshaller_01_00_01();
		}

		if (className == 'Void') {
			return new VoidMarshaller();
		}

		return null;
    }
}