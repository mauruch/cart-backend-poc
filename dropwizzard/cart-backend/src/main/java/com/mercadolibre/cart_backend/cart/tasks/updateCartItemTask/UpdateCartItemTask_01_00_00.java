package com.mercadolibre.cart_backend.cart.tasks.updateCartItemTask;

import com.mercadolibre.cart_backend.cart.entities.cartItem.CartItem_01_00_00;
import com.mercadolibre.cart_backend.core.TaskBase;
import com.mercadolibre.cart_backend.core.entities.VoidEntity;

import java.util.Map;

/**
 * Created by fvitali on 8/8/16.
 */
public class UpdateCartItemTask_01_00_00 extends TaskBase<VoidEntity> {
	@Override
	public VoidEntity execute(Map<String, Object> params) {
		super.execute(params);

		String cartId = (String) params.get("cartId");
		String item = (String) params.get("itemId");
		CartItem_01_00_00 cartItem = (CartItem_01_00_00) params.get("cartItem"); // TODO: validate

		return null;
	}
}
