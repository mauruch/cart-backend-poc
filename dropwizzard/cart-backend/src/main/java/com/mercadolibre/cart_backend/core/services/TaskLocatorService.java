package com.mercadolibre.cart_backend.core.services;

import com.mercadolibre.cart_backend.cart.tasks.addCartItemTask.AddCartItemTask_01_00_00;
import com.mercadolibre.cart_backend.cart.tasks.deleteCartItemTask.DeleteCartItemTask_01_00_00;
import com.mercadolibre.cart_backend.cart.tasks.deleteCartItemsTask.DeleteCartItemsTask_01_00_00;
import com.mercadolibre.cart_backend.cart.tasks.deleteCartTask.DeleteCartTask_01_00_00;
import com.mercadolibre.cart_backend.cart.tasks.getCartTask.GetCartTask_01_00_00;
import com.mercadolibre.cart_backend.cart.tasks.getCartTask.GetCartTask_02_00_00;
import com.mercadolibre.cart_backend.cart.tasks.updateCartItemTask.UpdateCartItemTask_01_00_00;
import com.mercadolibre.cart_backend.core.TaskBase;
import com.mercadolibre.cart_backend.core.entities.EntityBase;
import com.github.zafarkhaja.semver.Version;

import java.util.Map;

/**
 * Created by fvitali on 8/8/16.
 */
public class TaskLocatorService {
	public <E extends EntityBase> TaskBase<E> get(String taskName, String client, Version version, Map<String, Object> params) {

		switch (taskName) {
			case "getCart":
				if (version.lessThan(Version.valueOf("2.0.0"))) {
					return (TaskBase<E>) new GetCartTask_01_00_00();
				}
				return (TaskBase<E>) new GetCartTask_02_00_00();
			case "deleteCart":
				return (TaskBase<E>) new DeleteCartTask_01_00_00();
			case "addCartItem":
				return (TaskBase<E>) new AddCartItemTask_01_00_00();
			case "deleteCartItems":
				return (TaskBase<E>) new DeleteCartItemsTask_01_00_00();
			case "updateCartItem":
				return (TaskBase<E>) new UpdateCartItemTask_01_00_00();
			case "deleteCartItem":
				return (TaskBase<E>) new DeleteCartItemTask_01_00_00();
			default:
				return null;
		}
	}
}
