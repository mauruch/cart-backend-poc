package com.mercadolibre.cart_backend.api.config;

import io.dropwizard.Configuration;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.*;
import javax.validation.constraints.*;

public class ApiConfiguration extends Configuration {
    // TODO: implement service configuration

	@NotEmpty
	private String someConfig;

	@JsonProperty
	public String getSomeConfig() {
		return someConfig;
	}
}
