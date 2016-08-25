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

        this.buildTreeVersions();

    }

    private buildTreeVersions(): void {
        let fs = require('fs');
        let content = fs.readFileSync('versionsconfig.json');
        let jsonContent = JSON.parse(content);
        let versionsArray = jsonContent.tasks[0].versions;

        let groups: any = {};

        for (let i = 0; i < versionsArray.length; i++) {
            let item = versionsArray[i];

            if (!groups[item.api_client]) {
                groups[item.api_client] = [];
            }
            groups[item.api_client].push(item);
        }

        this.printTree(groups.web);
        this.printTree(groups.native);
        this.printTree(groups.android);
    }

    private printTree(clientVersions: any): void {
        console.log(clientVersions[0].api_client + '/');
        for (let i = 0; i < clientVersions.length; i++) {
            let version = clientVersions[i];
            let apiVersion = version.api_version;
            let apiClient = version.api_client;
            let taskNode = this.getPrettyNode(version.task);
            let entityNode = this.getPrettyNode(version.entity);
            let marshallerNode = this.getPrettyNode(version.marshaller);

            console.log('\t' + apiVersion + '/');
            console.log(taskNode);
            console.log(entityNode);
            console.log(marshallerNode);
            console.log('\n');
        }
    }

    private getPrettyNode(node: any): string {
        let task: string;
        if (node.parent == null) {
            task = '\t \t ==> ' + node.name;
        } else {
            task = '\t \t ==> ' + node.name + '\n \t \t \t extends ' + node.parent;
        }
        return task;
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
