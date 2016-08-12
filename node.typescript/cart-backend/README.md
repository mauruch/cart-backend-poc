# node/express POC with TypeScript 2 (cart-backend)

**This POC is a work in progress, the scope is not yet defined**

## Application Structure

**/src/api**: application agnostic REST API implementation
**/src/core**: interface agnostic Task Location and Execution
**/src/cart**: cart business logic (consumes api and core)

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
gulp build
```

To build:
```bash
node lib/app.js
```

### Package and run

The /lib folder can be packaged and many optimizations applied.

### IDE integration

Tested with free [Visual Studio Code](https://code.visualstudio.com/) 

There are available Plugins for VS Code, Sublime, vim, IntelliJ, etc

Now we can run or debug the application from the IDE!
