declare module 'cart-backend' {
	interface Entity {
	}
	export default Entity;

}
declare module 'cart-backend' {
	import Entity from '../../core/contracts/entity';
	export default class CartItem implements Entity {
	    id: string;
	    constructor(id: string);
	}

}
declare module 'cart-backend' {
	import Entity from '../../core/contracts/entity';
	import CartItem from 'cartItem';
	export default class Cart implements Entity {
	    id: string;
	    items: Array<CartItem>;
	    constructor(id: string);
	}

}
declare module 'cart-backend' {
	interface RequestParameters {
	    cartId: string;
	    itemId?: string;
	    apiClient: string;
	    apiVersion: string;
	    params: Map<string, any>;
	}
	export default RequestParameters;

}
declare module 'cart-backend' {
	import Entity from 'entity';
	interface Task<T extends Entity> {
	    execute(params: Map<string, any>): T;
	}
	export default Task;

}
declare module 'cart-backend' {
	import Task from '../../core/contracts/task';
	import Cart from '../entities/cart';
	export default class GetCartTask implements Task<Cart> {
	    execute(params: Map<string, any>): Cart;
	}

}
declare module 'cart-backend' {
	import Entity from '../contracts/entity';
	export default class Void implements Entity {
	}

}
declare module 'cart-backend' {
	import Task from '../../core/contracts/task';
	import Void from '../../core/entities/void';
	export default class DeleteCartTask implements Task<Void> {
	    execute(params: Map<string, any>): Void;
	}

}
declare module 'cart-backend' {
	import Task from '../../core/contracts/task';
	import Void from '../../core/entities/void';
	export default class AddCartItemTask implements Task<Void> {
	    execute(params: Map<string, any>): Void;
	}

}
declare module 'cart-backend' {
	import Task from '../../core/contracts/task';
	import Void from '../../core/entities/void';
	export default class DeleteCartItemsTask implements Task<Void> {
	    execute(params: Map<string, any>): Void;
	}

}
declare module 'cart-backend' {
	import Task from '../../core/contracts/task';
	import Void from '../../core/entities/void';
	export default class UpdateCartItemTask implements Task<Void> {
	    execute(params: Map<string, any>): Void;
	}

}
declare module 'cart-backend' {
	import Task from '../../core/contracts/task';
	import Void from '../../core/entities/void';
	export default class DeleteCartItemTask implements Task<Void> {
	    execute(params: Map<string, any>): Void;
	}

}
declare module 'cart-backend' {
	import Entity from '../contracts/entity';
	import Task from '../contracts/task';
	export default class TaskLocatorService {
	    get(taskName: string, apiClient: string, apiVersion: string): Task<Entity>;
	}

}
declare module 'cart-backend' {
	interface Marshaller<Entity> {
	    getJson(entity: Entity): any;
	}
	export default Marshaller;

}
declare module 'cart-backend' {
	import Marshaller from '../../core/contracts/marshaller';
	import Cart from '../entities/cart';
	export default class CartMarshaller implements Marshaller<Cart> {
	    getJson(entity: Cart): any;
	}

}
declare module 'cart-backend' {
	import Marshaller from '../contracts/marshaller';
	import Void from '../entities/void';
	export default class VoidMarshaller implements Marshaller<Void> {
	    getJson(entity: Void): any;
	}

}
declare module 'cart-backend' {
	import Marshaller from '../contracts/marshaller';
	import Entity from '../contracts/entity';
	export default class MarshallerLocatorService {
	    get(entity: Entity): Marshaller<Entity>;
	}

}
declare module 'cart-backend' {
	import TaskLocatorService from 'taskLocatorService';
	import MarshallerLocatorService from 'marshallerLocatorService';
	export default class TaskExecutorService {
	    taskLocatorService: TaskLocatorService;
	    marshallerLocatorService: MarshallerLocatorService;
	    constructor(taskLocatorService: TaskLocatorService, marshallerLocatorService: MarshallerLocatorService);
	    executeTask(taskName: string, apiClient: string, apiVersion: string, params: Map<string, any>): any;
	}

}
declare module 'cart-backend' {
	import * as express from 'express';
	import TaskExecutorService from '../../core/services/taskExecutorService';
	export default class CartRoutes {
	    taskExecutorService: TaskExecutorService;
	    router: express.Router;
	    constructor(taskExecutorService: TaskExecutorService);
	    register(): CartRoutes;
	    getRouter(): express.Router;
	    private getRequestParameters(req);
	}

}
