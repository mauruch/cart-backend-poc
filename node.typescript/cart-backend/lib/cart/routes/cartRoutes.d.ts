import * as express from 'express';
import TaskExecutorService from '../../core/services/taskExecutorService';
export default class CartRoutes {
    taskExecutorService: TaskExecutorService;
    router: express.Router;
    constructor(taskExecutorService: TaskExecutorService);
    register(): CartRoutes;
    getRouter(): express.Router;
    private getRequestParameters(req);
}
