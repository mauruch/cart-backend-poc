import Marshaller from '../contracts/marshaller';
import Void from '../entities/void';

export default class VoidMarshaller implements Marshaller<Void> {
    public getJson(entity: Void): any {
        return null;
    }
}