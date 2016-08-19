package com.mercadolibre.cart_backend.core.routing;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by fvitali on 8/18/16.
 */
public class TaskRouter {
	Map<String, Map<VersionRange, RouteTarget>> routeOverrides;

	public TaskRouter() {
		routeOverrides = new HashMap<>();
	}

	public void registerOverride(String client, VersionRange requestedVersionRange, RouteTarget target) {
		// TODO: verify overlapping
	}
}
