package com.mercadolibre.cart_backend.core;

import com.mercadolibre.cart_backend.core.entities.EntityBase;

import java.util.Map;

/**
 * Created by fvitali on 8/8/16.
 */
public abstract class TaskBase<E extends EntityBase> {
	public E execute(Map<String, Object> params) {
		System.out.println(String.format(">>>>>>Executing task \"%s\"", this.getClass().getName()));
		return null;
	}
}
