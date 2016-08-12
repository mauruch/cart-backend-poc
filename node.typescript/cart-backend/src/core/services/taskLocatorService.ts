import Entity from '../contracts/entity';
import Task from '../contracts/task';
import GetCartTask from '../../cart/tasks/getCartTask';
import DeleteCartTask from '../../cart/tasks/deleteCartTask';
import AddCartItemTask from '../../cart/tasks/addCartItemTask';
import DeleteCartItemsTask from '../../cart/tasks/deleteCartItemsTask';
import UpdateCartItemTask from '../../cart/tasks/updateCartItemTask';
import DeleteCartItemTask from '../../cart/tasks/deleteCartItemTask';

export default class TaskLocatorService {
    public get(taskName: string, apiClient: string, apiVersion: string): Task<Entity> {
        // TODO: resolve client/version
		switch (taskName) {
			case "getCart":
				return new GetCartTask();
			case "deleteCart":
				return new DeleteCartTask();
			case "addCartItem":
				return new AddCartItemTask();
			case "deleteCartItems":
				return new DeleteCartItemsTask();
			case "updateCartItem":
				return new UpdateCartItemTask();
			case "deleteCartItem":
				return new DeleteCartItemTask();
			default:
				return null;
		}
	}
}