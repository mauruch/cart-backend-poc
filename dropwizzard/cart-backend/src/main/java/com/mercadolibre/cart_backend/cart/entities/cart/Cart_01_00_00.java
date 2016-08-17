package com.mercadolibre.cart_backend.cart.entities.cart;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mercadolibre.cart_backend.cart.entities.cartItem.CartItem_01_00_00;
import com.mercadolibre.cart_backend.core.entities.EntityBase;

import java.util.ArrayList;
import java.util.List;

public class Cart_01_00_00 extends EntityBase {

	private String cartId;
	private List<CartItem_01_00_00> items;

	private String task;
	private String marshaller;
	private String note;

	public Cart_01_00_00(String cartId) {
		this.cartId = cartId;
		this.items = new ArrayList<>();

		this.note = "This is Cart_01_00_00";
	}

	@JsonProperty
	public String getCartId() {
		return cartId;
	}

	public void setCartId(String cartId) {
		this.cartId = cartId;
	}

	@JsonProperty
	public List<CartItem_01_00_00> getItems() {
		return items;
	}

	public void setItems(List<CartItem_01_00_00> items) {
		this.items = items;
	}

	@JsonProperty
	public int itemQuantity() { return this.items.size(); }

	@JsonProperty
	public String getTask() { return task; }

	public void setTask(String task) { this.task = task; }

	@JsonProperty
	public String getMarshaller() {	return marshaller; }

	public void setMarshaller(String marshaller) { this.marshaller = marshaller; }

	@JsonProperty
	public String getNote() { return note; }

	public void setNote(String note) { this.note = note; }
}