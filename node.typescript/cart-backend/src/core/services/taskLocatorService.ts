import Entity from '../contracts/entity';
import Task from '../contracts/task';
import { SemVer } from 'semver';
import GetCartTask_01_00_00 from '../../cart/tasks/getCartTask/getCartTask_01_00_00';
import GetCartTask_02_00_00 from '../../cart/tasks/getCartTask/getCartTask_02_00_00';
import DeleteCartTask_01_00_00 from '../../cart/tasks/deleteCartTask/deleteCartTask_01_00_00';
import AddCartItemTask_01_00_00 from '../../cart/tasks/addCartItemTask/addCartItemTask_01_00_00';
import DeleteCartItemsTask_01_00_00 from '../../cart/tasks/deleteCartItemsTask/deleteCartItemsTask_01_00_00';
import UpdateCartItemTask_01_00_00 from '../../cart/tasks/updateCartItemTask/updateCartItemTask_01_00_00';
import DeleteCartItemTask_01_00_00 from '../../cart/tasks/deleteCartItemTask/deleteCartItemTask_01_00_00';

export default class TaskLocatorService {
    public get(taskName: string, apiClient: string, apiVersion: SemVer): Task<Entity> {
        // TODO: resolve client/version
		switch (taskName) {
			case "getCart":
				if (apiVersion.compare(new SemVer('2.0.0')) == -1) {
					return new GetCartTask_01_00_00();
				}
				return new GetCartTask_02_00_00();
			case "deleteCart":
				return new DeleteCartTask_01_00_00();
			case "addCartItem":
				return new AddCartItemTask_01_00_00();
			case "deleteCartItems":
				return new DeleteCartItemsTask_01_00_00();
			case "updateCartItem":
				return new UpdateCartItemTask_01_00_00();
			case "deleteCartItem":
				return new DeleteCartItemTask_01_00_00();
			default:
				return null;
		}
	}
}