package com.mercadolibre.cart_backend.cart.config;

import io.dropwizard.Configuration;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.*;
import javax.validation.constraints.*;

public class CartBackendConfiguration extends Configuration {
    // TODO: implement service configuration

	@NotEmpty
	private String someConfig;

	@JsonProperty
	public String getSomeConfig() {
		return someConfig;
	}
}
