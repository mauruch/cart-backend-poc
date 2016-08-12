"use strict";
const express = require('express');
const cartRoutes_1 = require('./cart/routes/cartRoutes');
const taskExecutorService_1 = require('./core/services/taskExecutorService');
const taskLocatorService_1 = require('./core/services/taskLocatorService');
const marshallerLocatorService_1 = require('./core/services/marshallerLocatorService');
class App {
    constructor(port) {
        this.port = port;
        this.express = express();
    }
    start() {
        this.registerRoutes();
        this.express.listen(this.port);
    }
    registerRoutes() {
        let cartRoutes = new cartRoutes_1.default(this.getTaskExecutorService()).register().getRouter();
        this.express.use('/', cartRoutes);
    }
    getTaskExecutorService() {
        let taskLocatorService = new taskLocatorService_1.default();
        let marshallerLocatorService = new marshallerLocatorService_1.default();
        let taskExecutorService = new taskExecutorService_1.default(taskLocatorService, marshallerLocatorService);
        return taskExecutorService;
    }
}
let app = new App(8666);
app.start();
//# sourceMappingURL=app.js.map