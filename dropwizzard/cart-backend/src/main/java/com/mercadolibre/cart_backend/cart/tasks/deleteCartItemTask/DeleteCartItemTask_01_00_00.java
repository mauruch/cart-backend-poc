package com.mercadolibre.cart_backend.cart.tasks.deleteCartItemTask;

import com.mercadolibre.cart_backend.core.TaskBase;
import com.mercadolibre.cart_backend.core.entities.VoidEntity;

import java.util.Map;

/**
 * Created by fvitali on 8/8/16.
 */
public class DeleteCartItemTask_01_00_00 extends TaskBase<VoidEntity> {
	@Override
	public VoidEntity execute(Map<String, Object> params) {
		super.execute(params);

		String cartId = (String) params.get("cartId");
		String itemId = (String) params.get("itemId");

		return null;
	}
}
