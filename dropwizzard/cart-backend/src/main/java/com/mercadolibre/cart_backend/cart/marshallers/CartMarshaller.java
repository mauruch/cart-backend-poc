package com.mercadolibre.cart_backend.cart.marshallers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mercadolibre.cart_backend.cart.entities.Cart;
import com.mercadolibre.cart_backend.core.MarshallerBase;

/**
 * Created by fvitali on 8/8/16.
 */
public class CartMarshaller extends MarshallerBase<Cart> {
	@Override
	public ObjectNode getJson(Cart cart) {
		return getObjectNode(cart);
	}
}
