package com.mercadolibre.cart_backend.cart.tasks.deleteCartItemsTask;

import com.mercadolibre.cart_backend.cart.entities.cartItem.CartItem_01_00_00;
import com.mercadolibre.cart_backend.core.TaskBase;
import com.mercadolibre.cart_backend.core.entities.VoidEntity;

import java.util.Map;

/**
 * Created by fvitali on 8/8/16.
 */
public class DeleteCartItemsTask_01_00_00 extends TaskBase<VoidEntity> {
	@Override
	public VoidEntity execute(Map<String, Object> params) {
		super.execute(params);

		String cartId = (String) params.get("cartId");
		CartItem_01_00_00.Status itemStatus = (CartItem_01_00_00.Status) params.get("itemStatus");

		switch (itemStatus) {
			case savedForLater:
				break;
			case normal:
			default:
				break;
		}

		return null;
	}
}
