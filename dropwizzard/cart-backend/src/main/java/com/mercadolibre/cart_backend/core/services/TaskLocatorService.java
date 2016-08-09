package com.mercadolibre.cart_backend.core.services;

import com.mercadolibre.cart_backend.cart.tasks.*;
import com.mercadolibre.cart_backend.core.TaskBase;
import com.mercadolibre.cart_backend.core.entities.EntityBase;

import java.util.Map;

/**
 * Created by fvitali on 8/8/16.
 */
public class TaskLocatorService {
	public <E extends EntityBase> TaskBase<E> get(String taskName, String client, String version, Map<String, Object> params) {

		switch (taskName) {
			case "getCart":
				return (TaskBase<E>) new GetCartTask();
			case "deleteCart":
				return (TaskBase<E>) new DeleteCartTask();
			case "addCartItem":
				return (TaskBase<E>) new AddCartItemTask();
			case "deleteCartItems":
				return (TaskBase<E>) new DeleteCartItemsTask();
			case "updateCartItem":
				return (TaskBase<E>) new UpdateCartItemTask();
			case "deleteCartItem":
				return (TaskBase<E>) new DeleteCartItemTask();
			default:
				return null;
		}
	}
}
