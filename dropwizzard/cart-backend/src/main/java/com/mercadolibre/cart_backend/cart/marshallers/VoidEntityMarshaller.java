package com.mercadolibre.cart_backend.cart.marshallers;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mercadolibre.cart_backend.core.MarshallerBase;
import com.mercadolibre.cart_backend.core.entities.VoidEntity;

/**
 * Created by fvitali on 8/8/16.
 */
public class VoidEntityMarshaller extends MarshallerBase<VoidEntity> {
	@Override
	public ObjectNode getJson(VoidEntity voidEntity) {
		return null;
	}
}
