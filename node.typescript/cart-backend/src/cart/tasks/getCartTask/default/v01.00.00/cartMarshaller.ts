import Marshaller from '../../../../../core/contracts/marshaller';
import Cart from '../../../../entities/cart';

export default class CartMarshaller implements Marshaller<Cart> {
    public getJson(entity: Cart): any {
        return entity;
    }
}