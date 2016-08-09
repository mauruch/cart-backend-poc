package com.mercadolibre.cart_backend.core.services;

import com.mercadolibre.cart_backend.cart.entities.Cart;
import com.mercadolibre.cart_backend.cart.marshallers.CartMarshaller;
import com.mercadolibre.cart_backend.cart.marshallers.VoidEntityMarshaller;
import com.mercadolibre.cart_backend.core.MarshallerBase;
import com.mercadolibre.cart_backend.core.entities.EntityBase;
import com.mercadolibre.cart_backend.core.entities.VoidEntity;

/**
 * Created by fvitali on 8/8/16.
 */
public class MarshallerLocatorService {
	public <E extends EntityBase> MarshallerBase<E> get(EntityBase entity) {
		Class entityClass = entity.getClass();

		if (entityClass == Cart.class) {
			return (MarshallerBase<E>) new CartMarshaller();
		}

		if (entityClass == VoidEntity.class) {
			return (MarshallerBase<E>) new VoidEntityMarshaller();
		}

		return null;
	}
}
