package com.mercadolibre.cart_backend.cart.endpoints;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mercadolibre.cart_backend.cart.entities.CartItem;
import com.mercadolibre.cart_backend.core.services.TaskExecutorService;
import spark.Request;
import spark.Response;

import java.util.HashMap;
import java.util.Map;

import static spark.Spark.*;

/**
 * Created by fvitali on 8/8/16.
 */
public class CartEndpoints {

	private TaskExecutorService taskExecutorService;

	public CartEndpoints(TaskExecutorService taskExecutorService) {
		this.taskExecutorService = taskExecutorService;
	}

	public void register() {
		get("/carts/:cartId", this::getCart);
		delete("/carts/:cartId", this::deleteCart);
		post("/carts/:cartId/items", this::addCartItem);
		delete("/carts/:cartId/items", this::deleteCartItems);
		put("/carts/:cartId/items/:itemId", this::updateCartItem);
		delete("/carts/:cartId/items/:itemId", this::deleteCartItem);
	}

	private ObjectNode getCart(Request request, Response response) {
		String cartId = request.params(":cartId");
		String client = request.headers("X-API-CLIENT");
		String version = request.headers("X-API-VERSION");
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);

		System.out.println(String.format(">>> getCart(cartId: %s) [%s:%s]", cartId, client, version));

		ObjectNode objectNode = taskExecutorService.executeTask("getCart", client, version, params);

		return objectNode;
	}

	private Object deleteCart(Request request, Response response) {
		String cartId = request.params(":cartId");
		String client = request.headers("X-API-CLIENT");
		String version = request.headers("X-API-VERSION");
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);

		System.out.println(String.format(">>> deleteCart(cartId: %s) [%s:%s]", cartId, client, version));

		taskExecutorService.executeTask("deleteCart", client, version, params);
		return true;
	}

	private Object addCartItem(Request request, Response response) {
		String cartId = request.params(":cartId");
		CartItem cartItem = null; // TODO: deserialize from body
		String client = request.headers("X-API-CLIENT");
		String version = request.headers("X-API-VERSION");
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);
		params.put("cartItem", cartItem);

		System.out.println(String.format(">>> addCartItem(cartId: %s) [%s:%s]", cartId, client, version));

		taskExecutorService.executeTask("addCartItem", client, version, params);
		return true;
	}

	private Object deleteCartItems(Request request, Response response) {
		String cartId = request.params(":cartId");
		CartItem.Status itemStatus = CartItem.Status.valueOf(request.params("status"));
		String client = request.headers("X-API-CLIENT");
		String version = request.headers("X-API-VERSION");
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);
		params.put("itemStatus", itemStatus);

		System.out.println(String.format(">>> deleteCartItems(cartId: %s, status: %s) [%s:%s]", cartId, itemStatus, client, version));

		taskExecutorService.executeTask("deleteCartItems", client, version, params);
		return true;
	}

	private Object updateCartItem(Request request, Response response) {
		String cartId = request.params(":cartId");
		String itemId = request.params(":itemId");
		CartItem cartItem = null; // TODO: deserialize from body
		String client = request.headers("X-API-CLIENT");
		String version = request.headers("X-API-VERSION");
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);
		params.put("itemId", itemId	);
		params.put("cartItem", cartItem);

		System.out.println(String.format(">>> updateCartItem(cartId: %s, itemId: %s) [%s:%s]", cartId, itemId, client, version));

		taskExecutorService.executeTask("updateCartItem", client, version, params);
		return true;
	}

	private Object deleteCartItem(Request request, Response response) {
		String cartId = request.params(":cartId");
		String itemId = request.params(":itemId");
		String client = request.headers("X-API-CLIENT");
		String version = request.headers("X-API-VERSION");
		Map<String, Object> params = new HashMap<>();
		params.put("cartId", cartId);
		params.put("itemId", itemId	);

		System.out.println(String.format(">>> deleteCartItem(cartId: %s, itemId: %s) [%s:%s]", cartId, itemId, client, version));

		taskExecutorService.executeTask("deleteCartItem", client, version, params);
		return true;
	}
}
