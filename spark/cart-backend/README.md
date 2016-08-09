# Spark POC (cart-backend)

**This POC is a work in progress, the scope is not yet defined**

## Application Structure

**/main/java/com/mercadolibre/cart_backend/api**: application agnostic REST API implementation
**/main/java/com/mercadolibre/cart_backend/core**: interface agnostic Task Location and Execution
**/main/java/com/mercadolibre/cart_backend/cart**: cart business logic (consumes api and core)

## Environment

### Pre-requisites

* Java 1.8
* Maven 3.x+

### Run

First, install dependencies:
```bash
mvn install
```

To run:
```bash
mvn compile exec:java
```

### Package and run

To package distributable .jar:
```bash
mvn package
```

To run package:
```bash
java -jar target/cart-backend-1.0-SNAPSHOT.jar
```

### IntelliJ integration

* Edit Configurations -> Add new configuration of type "Application"
* Set "main class" as "com.mercadolibre.cart_backend.api.Main"

Now we can run or debug the application from the IDE!
