import * as express from 'express';
import TaskExecutorService from './core/services/taskExecutorService';
import TaskLocatorService from './core/services/taskLocatorService';
import MarshallerLocatorService from './core/services/marshallerLocatorService';

import CartRoutes from './cart/routes/cartRoutes';
import HomeRoutes from './home/routes/homeRoutes';

class App {
    express: express.Express;
    port: number;

    constructor(port: number) {
        this.port = port;
        this.express = express();
    }

    public start(): void {
        this.registerRoutes();
        this.express.disable('etag');
        this.express.listen(this.port);
    }

    private registerRoutes(): void {
        let cartRoutes = new CartRoutes(this.getTaskExecutorService()).register().getRouter();
        this.express.use('/', cartRoutes);

        let homeRoutes = new HomeRoutes(this.getTaskExecutorService()).register().getRouter();
        this.express.use('/', homeRoutes);
    }

    private getTaskExecutorService(): TaskExecutorService {
        let taskLocatorService: TaskLocatorService = new TaskLocatorService();
        let marshallerLocatorService: MarshallerLocatorService = new MarshallerLocatorService();
        let taskExecutorService: TaskExecutorService = new TaskExecutorService(taskLocatorService, marshallerLocatorService);

        return taskExecutorService;
    }
}

let app = new App(8666);
app.start();
