package com.mercadolibre.cart_backend.cart.resources;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.github.zafarkhaja.semver.Version;
import com.mercadolibre.cart_backend.cart.entities.cartItem.CartItem_01_00_00;
import com.mercadolibre.cart_backend.core.services.TaskExecutorService;
import com.mercadolibre.cart_backend.api.resources.ResourceBase;

import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * Created by fvitali on 8/4/16.
 */
@Path("/carts")
@Produces(MediaType.APPLICATION_JSON)
public class CartResource extends ResourceBase {

	private TaskExecutorService taskExecutorService;
	private final String defaultClient = "web";
	private final String currentVersion = "2.0.0";

	public CartResource(TaskExecutorService taskExecutorService) {
		this.taskExecutorService = taskExecutorService;
	}

	@GET
	@Path("/{cartId}")
	public Optional<ObjectNode> getCart(@PathParam("cartId") String cartId, @Context HttpHeaders httpHeaders) {
		String client = httpHeaders.getHeaderString("X-API-CLIENT");
		client = client != null ? client : defaultClient;
		String strVersion = httpHeaders.getHeaderString("X-API-VERSION");
		Version version = Version.valueOf(strVersion != null ? strVersion : currentVersion);
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);

		System.out.println(String.format(">>> getCart(cartId: %s) [%s:%s]", cartId, client, version));

		ObjectNode objectNode = taskExecutorService.executeTask("getCart", client, version, params);

		return Optional.ofNullable(objectNode);
	}

	@DELETE
	@Path("/{cartId}")
	public void deleteCart(@PathParam("cartId") String cartId, @Context HttpHeaders httpHeaders) {
		String client = httpHeaders.getHeaderString("X-API-CLIENT");
		client = client != null ? client : defaultClient;
		String strVersion = httpHeaders.getHeaderString("X-API-VERSION");
		Version version = Version.valueOf(strVersion != null ? strVersion : currentVersion);
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);

		System.out.println(String.format(">>> deleteCart(cartId: %s) [%s:%s]", cartId, client, version));

		taskExecutorService.executeTask("deleteCart", client, version, params);
	}

	@POST
	@Path("/{cartId}/items")
	public void addCartItem(@PathParam("cartId") String cartId, CartItem_01_00_00 cartItem, @Context HttpHeaders httpHeaders) {
		String client = httpHeaders.getHeaderString("X-API-CLIENT");
		client = client != null ? client : defaultClient;
		String strVersion = httpHeaders.getHeaderString("X-API-VERSION");
		Version version = Version.valueOf(strVersion != null ? strVersion : currentVersion);
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);
		params.put("cartItem", cartItem);

		System.out.println(String.format(">>> addCartItem(cartId: %s) [%s:%s]", cartId, client, version));

		taskExecutorService.executeTask("addCartItem", client, version, params);
	}

	@DELETE
	@Path("/{cartId}/items")
	public void deleteCartItems(@PathParam("cartId") String cartId, @QueryParam("status") CartItem_01_00_00.Status itemStatus, @Context HttpHeaders httpHeaders) {
		String client = httpHeaders.getHeaderString("X-API-CLIENT");
		client = client != null ? client : defaultClient;
		String strVersion = httpHeaders.getHeaderString("X-API-VERSION");
		Version version = Version.valueOf(strVersion != null ? strVersion : currentVersion);
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);
		params.put("itemStatus", itemStatus);

		System.out.println(String.format(">>> deleteCartItems(cartId: %s, status: %s) [%s:%s]", cartId, itemStatus, client, version));

		taskExecutorService.executeTask("deleteCartItems", client, version, params);
	}

	@PUT
	@Path("/{cartId}/items/{itemId}")
	public void updateCartItem(@PathParam("cartId") String cartId, @PathParam("itemId") String itemId, CartItem_01_00_00 cartItem, @Context HttpHeaders httpHeaders) {
		String client = httpHeaders.getHeaderString("X-API-CLIENT");
		client = client != null ? client : defaultClient;
		String strVersion = httpHeaders.getHeaderString("X-API-VERSION");
		Version version = Version.valueOf(strVersion != null ? strVersion : currentVersion);
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);
		params.put("itemId", itemId);
		params.put("cartItem", cartItem);

		System.out.println(String.format(">>> updateCartItem(cartId: %s, itemId: %s) [%s:%s]", cartId, itemId, client, version));

		taskExecutorService.executeTask("updateCartItem", client, version, params);
	}

	@DELETE
	@Path("/{cartId}/items/{itemId}")
	public void deleteCartItem(@PathParam("cartId") String cartId, @PathParam("itemId") String itemId, @Context HttpHeaders httpHeaders) {
		String client = httpHeaders.getHeaderString("X-API-CLIENT");
		client = client != null ? client : defaultClient;
		String strVersion = httpHeaders.getHeaderString("X-API-VERSION");
		Version version = Version.valueOf(strVersion != null ? strVersion : currentVersion);
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);
		params.put("itemId", itemId);

		System.out.println(String.format(">>> deleteCartItem(cartId: %s, itemId: %s) [%s:%s]", cartId, itemId, client, version));

		taskExecutorService.executeTask("deleteCartItem", client, version, params);
	}
}
