package com.mercadolibre.cart_backend.api.filters;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import java.io.IOException;

/**
 * Created by fvitali on 8/8/16.
 */
public class NullResponseFilter implements ContainerResponseFilter {
	@Override
	public void filter(ContainerRequestContext containerRequestContext, ContainerResponseContext containerResponseContext) throws IOException {
		Object responseEntity = containerResponseContext.getEntity();

		if (responseEntity == null) {
			containerResponseContext.setStatus(404);
		}
	}
}
