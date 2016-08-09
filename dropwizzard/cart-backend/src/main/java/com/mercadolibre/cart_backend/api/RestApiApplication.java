package com.mercadolibre.cart_backend.api;

import com.mercadolibre.cart_backend.cart.config.CartBackendConfiguration;
import com.mercadolibre.cart_backend.cart.resources.CartResource;
import com.mercadolibre.cart_backend.core.services.TaskExecutorService;
import com.mercadolibre.cart_backend.core.services.MarshallerLocatorService;
import com.mercadolibre.cart_backend.core.services.TaskLocatorService;
import com.mercadolibre.cart_backend.api.filters.ClientVersionRequestFilter;
import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.eclipse.jetty.servlets.CrossOriginFilter;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;

public class RestApiApplication extends Application<CartBackendConfiguration> {

    public static void main(final String[] args) throws Exception {
        new RestApiApplication().run(args);
    }

    @Override
    public String getName() {
        return "CartBackend";
    }

    @Override
    public void initialize(final Bootstrap<CartBackendConfiguration> bootstrap) {
    }

    @Override
    public void run(final CartBackendConfiguration configuration, final Environment environment) {

        final FilterRegistration.Dynamic cors =
                environment.servlets().addFilter("CORS", CrossOriginFilter.class);

        // Configure CORS parameters
        cors.setInitParameter("allowedOrigins", "*");
        cors.setInitParameter("allowedHeaders", "X-Requested-With,Content-Type,Accept,Origin");
        cors.setInitParameter("allowedMethods", "OPTIONS,GET,PUT,POST,DELETE,HEAD");

        // Add URL mapping
        cors.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");

        // Register ClientVersionRequestFilter
        ClientVersionRequestFilter clientVersionRequestFilter = new ClientVersionRequestFilter();
        clientVersionRequestFilter.setApiCurrentVersion("1.0.8");
        environment.jersey().register(clientVersionRequestFilter);

        // Register NullResponseFilter
        //environment.jersey().register(new NullResponseFilter());

        // TODO: replace with DI
        TaskLocatorService taskLocatorService = new TaskLocatorService();
        MarshallerLocatorService marshallerLocatorService = new MarshallerLocatorService();
        TaskExecutorService taskExecutorService = new TaskExecutorService(taskLocatorService, marshallerLocatorService);

        // Cart Resource registration
        CartResource cartResource = new CartResource(taskExecutorService);
        environment.jersey().register(cartResource);
    }

}
