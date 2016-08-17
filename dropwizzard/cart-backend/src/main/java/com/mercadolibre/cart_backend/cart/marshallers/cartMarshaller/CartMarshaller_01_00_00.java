package com.mercadolibre.cart_backend.cart.marshallers.cartMarshaller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mercadolibre.cart_backend.cart.entities.cart.Cart_01_00_00;
import com.mercadolibre.cart_backend.core.MarshallerBase;

/**
 * Created by fvitali on 8/8/16.
 */
public class CartMarshaller_01_00_00 extends MarshallerBase<Cart_01_00_00> {
	@Override
	public ObjectNode getJson(Cart_01_00_00 cart) {
		cart.setNote(cart.getNote() + " (modified with CartMarshaller_01_00_00)");
		cart.setMarshaller("CartMarshaller_01_00_00");

		return getObjectNode(cart);
	}
}
