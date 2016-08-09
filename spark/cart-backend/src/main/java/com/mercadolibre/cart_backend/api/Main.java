package com.mercadolibre.cart_backend.api;

import com.mercadolibre.cart_backend.cart.endpoints.CartEndpoints;
import com.mercadolibre.cart_backend.core.services.MarshallerLocatorService;
import com.mercadolibre.cart_backend.core.services.TaskExecutorService;
import com.mercadolibre.cart_backend.core.services.TaskLocatorService;

import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {

        // TODO: register in container
        TaskLocatorService taskLocatorService = new TaskLocatorService();
        MarshallerLocatorService marshallerLocatorService = new MarshallerLocatorService();
        TaskExecutorService taskExecutorService = new TaskExecutorService(taskLocatorService, marshallerLocatorService);

        // Register filters
        before((request, response) -> {});

        after((request, response) -> {
            response.type("application/json");
        });

        // Register Spark endpoints
        CartEndpoints cartEndpoints = new CartEndpoints(taskExecutorService);
        cartEndpoints.register();
    }
}