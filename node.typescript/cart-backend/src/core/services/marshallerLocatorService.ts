import Marshaller from '../contracts/marshaller';
import Entity from '../contracts/entity';
import CartMarshaller_01_00_00 from '../../cart/tasks/getCartTask/default/v01.00.00/cartMarshaller';
import HomeWidgetsMarshaller_01_00_00 from '../../home/marshallers/homeWidgetsMarshaller/homeWidgetsMarshaller_01_00_00';
import HomeWidgetsMarshaller_01_10_00 from '../../home/marshallers/homeWidgetsMarshaller/homeWidgetsMarshaller_01_10_00';
import VoidMarshaller from '../marshallers/voidMarshaller';
import { SemVer } from 'semver';

export default class MarshallerLocatorService {
    public get(entity: Entity, client: string, version: SemVer): Marshaller<Entity> {
        let className: string = entity.constructor.name;

		if (className.startsWith('Cart_')) {
			if (version.compare(new SemVer('1.0.0')) === 0) {
				return new CartMarshaller_01_00_00();
			}
			return new CartMarshaller_01_00_00();
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

		return new CartMarshaller_01_00_00();
    }
}