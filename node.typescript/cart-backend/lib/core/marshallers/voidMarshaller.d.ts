import Marshaller from '../contracts/marshaller';
import Void from '../entities/void';
export default class VoidMarshaller implements Marshaller<Void> {
    getJson(entity: Void): any;
}
