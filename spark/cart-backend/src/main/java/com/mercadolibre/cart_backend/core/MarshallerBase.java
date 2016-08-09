package com.mercadolibre.cart_backend.core;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Created by fvitali on 8/8/16.
 */
public abstract class MarshallerBase<IEntity> {

	protected ObjectNode getObjectNode(IEntity entity) {
		ObjectMapper mapper = new ObjectMapper();

		ObjectNode objectNode = mapper.valueToTree(entity);
		return objectNode;
	}

	public abstract ObjectNode getJson(IEntity entity);
}
