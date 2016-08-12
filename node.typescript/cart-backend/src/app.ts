import * as express from 'express';
import CartRoutes from './cart/routes/cartRoutes';
import TaskExecutorService from './core/services/taskExecutorService';
import TaskLocatorService from './core/services/taskLocatorService';
import MarshallerLocatorService from './core/services/marshallerLocatorService';

class App {
    express: express.Express;
    port: number;

    constructor(port: number) {
        this.port = port;
        this.express = express();
    }

    public start(): void {
        this.registerRoutes();
        this.express.listen(this.port);
    }

    private registerRoutes(): void {
        let cartRoutes = new CartRoutes(this.getTaskExecutorService()).register().getRouter();
        this.express.use('/', cartRoutes);
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
