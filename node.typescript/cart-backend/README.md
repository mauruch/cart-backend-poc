# node/express POC with TypeScript 1.8 (cart-backend)

**This POC is a work in progress, the scope is not yet defined**

## Application Structure

 **/src/api**: application agnostic REST API implementation

 **/src/core**: interface agnostic Task Location and Execution

 **/src/cart**: cart business logic (consumes api and core)

- /src/cart/routes/&lt;routeName&gt;
- /src/cart/config/&lt;configName&gt;
- /src/cart/tasks/&lt;taskName&gt;/&lt;taskName_VERSION&gt;
- /src/cart/marshallers/&lt;marshallerName&gt;/&lt;marshallerName_VERSION&gt;
- /src/cart/entities/&lt;entityName&gt;/&lt;entityName_VERSION&gt;

## Constraints

* Configurations are typed and each task selects a version
* All configuration inherit from a base Application Configurations
* Version resolution affects Tasks and Marshallers only
 * The task is selected based on the endpoint and the client/version requested
 * The entity used is selected internally by the task
 * The marshaller is resolved primarily by the entity and the scoped by version if available
* Still makes sense to filter by client type? Should this association be performed at declaration time, instead of maintaining a folder structure?

## Environment

### Pre-requisites

* NodeJs (stable) 4.x+ (6.x+ recommended)
* Install globally (no dependencies needed on next version)

```bash
npm install --global typings typescript gulp mocha
```

### Run

First, install dependencies:
```bash
npm install
typings install
```

To build:
```bash
npm run build
```

To build:
```bash
npm run app
```

### Package and run

The /lib folder can be packaged and many optimizations applied.

### IDE integration

Tested with free [Visual Studio Code](https://code.visualstudio.com/) 

There are available Plugins for VS Code, Sublime, vim, IntelliJ, etc

Now we can run or debug the application from the IDE!
