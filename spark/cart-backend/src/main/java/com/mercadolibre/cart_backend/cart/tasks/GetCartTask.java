package com.mercadolibre.cart_backend.cart.tasks;

import com.mercadolibre.cart_backend.cart.entities.Cart;
import com.mercadolibre.cart_backend.cart.entities.CartItem;
import com.mercadolibre.cart_backend.core.TaskBase;

import java.util.Map;

/**
 * Created by fvitali on 8/8/16.
 */
public class GetCartTask extends TaskBase<Cart> {
	@Override
	public Cart execute(Map<String, Object> params) {
		super.execute(params);

		String cartId = (String) params.get("cartId");

		if (cartId.equals("667")) {
			return null;
		}

		Cart cart = new Cart(cartId);
		cart.getItems().add(new CartItem("1", 1, "My item 1", 13.28));
		cart.getItems().add(new CartItem("2", 2, "My item 2", 1024.36));
		cart.getItems().add(new CartItem("3", 1, "My item 3", 666));

		return cart;
	}
}
