import Marshaller from '../../core/contracts/marshaller';
import Cart from '../entities/cart';
export default class CartMarshaller implements Marshaller<Cart> {
    getJson(entity: Cart): any;
}
