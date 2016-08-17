package com.mercadolibre.cart_backend.cart.tasks.deleteCartTask;

import com.mercadolibre.cart_backend.core.entities.VoidEntity;
import com.mercadolibre.cart_backend.core.TaskBase;

import java.util.Map;

/**
 * Created by fvitali on 8/8/16.
 */
public class DeleteCartTask_01_00_00 extends TaskBase<VoidEntity> {
	@Override
	public VoidEntity execute(Map<String, Object> params) {
		super.execute(params);

		String cartId = (String) params.get("cartId");

		return null;
	}
}
