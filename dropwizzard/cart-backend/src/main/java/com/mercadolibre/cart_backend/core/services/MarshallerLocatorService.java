package com.mercadolibre.cart_backend.core.services;

import com.mercadolibre.cart_backend.cart.entities.cart.Cart_01_00_00;
import com.mercadolibre.cart_backend.cart.entities.cart.Cart_01_01_00;
import com.mercadolibre.cart_backend.cart.marshallers.cartMarshaller.CartMarshaller_01_00_00;
import com.mercadolibre.cart_backend.cart.marshallers.VoidEntityMarshaller;
import com.mercadolibre.cart_backend.cart.marshallers.cartMarshaller.CartMarshaller_01_00_01;
import com.mercadolibre.cart_backend.core.MarshallerBase;
import com.mercadolibre.cart_backend.core.entities.EntityBase;
import com.mercadolibre.cart_backend.core.entities.VoidEntity;
import com.github.zafarkhaja.semver.Version;

/**
 * Created by fvitali on 8/8/16.
 */
public class MarshallerLocatorService {
	public <E extends EntityBase> MarshallerBase<E> get(EntityBase entity, String client, Version version) {
		Class entityClass = entity.getClass();

		if (entityClass == Cart_01_00_00.class) {
			if (version.lessThan(Version.valueOf("1.0.1"))) {
				return (MarshallerBase<E>) new CartMarshaller_01_00_00();
			}
			return (MarshallerBase<E>) new CartMarshaller_01_00_01();
		}

		if (entityClass == Cart_01_01_00.class) {
			return (MarshallerBase<E>) new CartMarshaller_01_00_01();
		}

		if (entityClass == VoidEntity.class) {
			return (MarshallerBase<E>) new VoidEntityMarshaller();
		}

		return null;
	}
}
