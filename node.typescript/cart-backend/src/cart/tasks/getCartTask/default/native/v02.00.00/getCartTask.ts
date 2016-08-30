import Task from '../../../../../../core/contracts/Task';
import Cart from '../../../../../entities/cart';
import CartItem from '../../../../../entities/cartItem';
import CartConfig_01_00_00 from '../../../../../config/CartConfig_01_00_00';
import { Promise } from 'es6-promise';
import CartService from '../../../../../services/CartService';
import UserService from '../../../../../services/UserService';
import ShippingService from '../../../../../services/ShippingService';
import LocalizationProvider from '../../../../../../framework/i18n/LocalizationProvider';
import GetCartTask_v01_00_00 from '../../v01.00.00/getCartTask'

export default class GetCartTask extends GetCartTask_v01_00_00 {

    public async execute(params: Map<string, any>): Promise<Cart> {
        return super.execute(params).then((cart: Cart) => {
            cart.price *= 2;
            return cart;
        })
    }
}