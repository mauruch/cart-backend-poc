import Marshaller from '../../../core/contracts/marshaller';
import Cart_01_00_00 from '../../entities/cart/cart_01_00_00';

export default class CartMarshaller_01_00_00 implements Marshaller<Cart_01_00_00> {
    public getJson(entity: Cart_01_00_00): any {
        return entity;
    }
}