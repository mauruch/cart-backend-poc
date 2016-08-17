package com.mercadolibre.cart_backend.cart.tasks.getCartTask;

import com.mercadolibre.cart_backend.cart.entities.cart.Cart_01_00_00;
import com.mercadolibre.cart_backend.cart.entities.cartItem.CartItem_01_00_00;
import com.mercadolibre.cart_backend.core.TaskBase;

import java.util.Map;

/**
 * Created by fvitali on 8/8/16.
 */
public class GetCartTask_01_00_00 extends TaskBase<Cart_01_00_00> {
	@Override
	public Cart_01_00_00 execute(Map<String, Object> params) {
		super.execute(params);

		String cartId = (String) params.get("cartId");

		if (cartId.equals("404")) {
			return null;
		}

		Cart_01_00_00 cart = new Cart_01_00_00(cartId);
		cart.getItems().add(new CartItem_01_00_00("1", 1, "My item 1", 13.28));
		cart.getItems().add(new CartItem_01_00_00("2", 2, "My item 2", 1024.36));
		cart.getItems().add(new CartItem_01_00_00("3", 1, "My item 3", 666));

		cart.setTask("GetCartTask_01_00_00");

		return cart;
	}
}
