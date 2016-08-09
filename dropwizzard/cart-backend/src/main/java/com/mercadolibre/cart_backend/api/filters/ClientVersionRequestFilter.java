package com.mercadolibre.cart_backend.api.filters;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import java.io.IOException;

/**
 * Created by fvitali on 8/8/16.
 */
public class ClientVersionRequestFilter implements ContainerRequestFilter {

	public final String ApiClientHeader = "X-API-CLIENT";
	public final String ApiVersionHeader = "X-API-VERSION";
	public final String ApiDefaultClient = "web";
	private String apiCurrentVersion;

	public String getApiCurrentVersion() {
		return apiCurrentVersion;
	}

	public void setApiCurrentVersion(String apiCurrentVersion) {
		this.apiCurrentVersion = apiCurrentVersion;
	}

	@Override
	public void filter(ContainerRequestContext containerRequestContext) throws IOException {
		String xApiClient = containerRequestContext.getHeaderString(ApiClientHeader);
		String xApiVersion = containerRequestContext.getHeaderString(ApiVersionHeader);

		if (stringNullOrEmpty(xApiClient)) {
			xApiClient = ApiDefaultClient;
			containerRequestContext.getHeaders().add(ApiClientHeader, xApiClient);
		}

		if (stringNullOrEmpty(xApiVersion)) {
			xApiVersion = getApiCurrentVersion();
			containerRequestContext.getHeaders().add(ApiVersionHeader, xApiVersion);
		}

		System.out.println(String.format(">>> Request filter (%s:%s)", xApiClient, xApiVersion));
	}

	private boolean stringNullOrEmpty(String input) {
		return (input == null || input.isEmpty());
	}
}
