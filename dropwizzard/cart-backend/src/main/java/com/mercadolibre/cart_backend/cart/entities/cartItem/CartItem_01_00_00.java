package com.mercadolibre.cart_backend.cart.entities.cartItem;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mercadolibre.cart_backend.core.entities.EntityBase;

public class CartItem_01_00_00 extends EntityBase {

	private String itemId;
	private int itemQuantity;
	private String itemDescription;
	private double itemPrice;

	public CartItem_01_00_00(String itemId, int itemQuantity, String itemDescription, double itemPrice) {
		this.itemId = itemId;
		this.itemQuantity = itemQuantity;
		this.itemDescription = itemDescription;
		this.itemPrice = itemPrice;
	}

	@JsonProperty
	public String getItemId() { return itemId;}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	@JsonProperty
	public int getItemQuantity() { return itemQuantity;	}

	public void setItemQuantity(int itemQuantity) { this.itemQuantity = itemQuantity; }

	@JsonProperty
	public String getItemDescription() {
		return itemDescription;
	}

	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}

	@JsonProperty
	public double getItemPrice() {
		return itemPrice;
	}

	public void setItemPrice(double itemPrice) {
		this.itemPrice = itemPrice;
	}

	public enum Status {
		all,
		normal,
		savedForLater
	}
}