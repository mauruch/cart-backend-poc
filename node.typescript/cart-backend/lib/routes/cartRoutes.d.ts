import * as express from 'express';
export default class CartRoutes {
    router: express.Router;
    constructor();
    register(): CartRoutes;
    getRouter(): express.Router;
    private getRequestParameters(req);
}
