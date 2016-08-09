package com.mercadolibre.cart_backend.cart.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mercadolibre.cart_backend.core.entities.EntityBase;

import java.util.ArrayList;
import java.util.List;

public class Cart extends EntityBase {

	private String cartId;
	private List<CartItem> items;

	public Cart(String cartId) {
		this.cartId = cartId;
		this.items = new ArrayList<>();
	}

	@JsonProperty
	public String getCartId() {
		return cartId;
	}

	public void setCartId(String cartId) {
		this.cartId = cartId;
	}

	@JsonProperty
	public List<CartItem> getItems() {
		return items;
	}

	public void setItems(List<CartItem> items) {
		this.items = items;
	}

	@JsonProperty
	public int itemQuantity() { return this.items.size(); }
}