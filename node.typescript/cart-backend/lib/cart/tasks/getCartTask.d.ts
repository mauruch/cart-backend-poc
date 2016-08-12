import Task from '../../core/contracts/task';
import Cart from '../entities/cart';
export default class GetCartTask implements Task<Cart> {
    execute(params: Map<string, any>): Cart;
}
