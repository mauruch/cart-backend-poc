import Marshaller from '../contracts/marshaller';
import Entity from '../contracts/entity';
import CartMarshaller_01_00_00 from '../../cart/marshallers/cartMarshaller/cartMarshaller_01_00_00';
import CartMarshaller_01_00_01 from '../../cart/marshallers/cartMarshaller/cartMarshaller_01_00_01';
import HomeWidgetsMarshaller_01_00_00 from '../../home/marshallers/homeWidgetsMarshaller/homeWidgetsMarshaller_01_00_00';
import HomeWidgetsMarshaller_01_10_00 from '../../home/marshallers/homeWidgetsMarshaller/homeWidgetsMarshaller_01_10_00';
import VoidMarshaller from '../marshallers/voidMarshaller';
import { SemVer } from 'semver';
import * as semver from 'semver'

export default class MarshallerLocatorService {
    public get(entity: Entity, client: string, version: SemVer): Marshaller<Entity> {
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

		if (className.startsWith('HomeWidgets_')) {
			if (client.startsWith('web')) {
				if (version.compare(new SemVer('1.10.0')) >= 0) {
					return new HomeWidgetsMarshaller_01_10_00();
				}
			}
			return new HomeWidgetsMarshaller_01_00_00();
		}

		return null;
    }
}