import * as express from 'express';
import Cart from '../../cart/entities/cart';
import CartItem from '../../cart/entities/cartItem';
import RequestParameters from '../../routes/requestParameters';
import TaskExecutorService from '../../core/services/taskExecutorService';

export default class CartRoutes {
    router: express.Router;

    constructor(public taskExecutorService: TaskExecutorService) {
        this.router = express.Router();
    }

    public register(): CartRoutes {
        this.router.get('/carts/:cartId', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);

            let cart: any = this.taskExecutorService.executeTask('getCart', requestParameters.apiClient, requestParameters.apiVersion, requestParameters.params);
            res.send(cart);
        });

        this.router.delete('/cartst/:cartId', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);

            res.status(200);
            res.end();
        });

        this.router.post('/carts/:cartId', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);
            res.end();
        });

        this.router.delete('/carts/:cartId/items', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);
            let statusKey: string = 'status';
            let status: string = req.params[statusKey];

            res.end();
        });

        this.router.put('/carts/:cartId/items/:itemId', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);

            res.end();
        });

        this.router.delete('/carts/:cartId/items/:itemId', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);

            res.end();
        });

        return this;
    }

    public getRouter(): express.Router {
        return this.router;
    }

    private getRequestParameters(req: express.Request): RequestParameters {
        /* tslint:disable:no-string-literal */
        let requestParameters: RequestParameters = {
            cartId: req.params['cartId'],
            itemId: req.params['itemId'] || null,
            apiClient: req.get('X-API-CLIENT') || null,
            apiVersion: req.get('X-API-VERSION') || null,
            params: new Map<string, any>()
        };
        /* tsslint:enable:no-string-literal */
        
        requestParameters.params.set('cartId', requestParameters.cartId);
        requestParameters.params.set('itemId', requestParameters.itemId);

        console.log(`[${req.method}] ${req.originalUrl} [${requestParameters.apiClient}:${requestParameters.apiVersion}]`);
        return requestParameters;
    }
}
