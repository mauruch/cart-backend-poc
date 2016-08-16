import * as express from 'express';
import { SemVer } from 'semver';
import Cart from '../../cart/entities/cart/cart_01_00_00';
import CartItem from '../../cart/entities/cartItem/cartItem_01_00_00';
import RequestParameters from '../../api/requestParameters';
import ClientInfo from '../../api/clientInfo';
import TaskExecutorService from '../../core/services/taskExecutorService';

export default class CartRoutes {
    router: express.Router;
    defaultClient: string;
    latestVersion: string;

    constructor(public taskExecutorService: TaskExecutorService) {
        this.router = express.Router();

        this.defaultClient = 'web';
        this.latestVersion = '2.0.0';
    }

    public register(): CartRoutes {
        this.router.get('/carts/:cartId', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);
            
            let cart: any = this.taskExecutorService.executeTask('getCart', requestParameters.clientInfo, requestParameters.params);
            
            // TODO: move to middleware
            if (!cart) {
                res.status(404);
                res.end();
                return;
            }

            res.send(cart);
        });

        this.router.delete('/cartst/:cartId', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);
            
            this.taskExecutorService.executeTask('deleteCart', requestParameters.clientInfo, requestParameters.params);
            res.end();
        });

        this.router.post('/carts/:cartId', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);
            
            this.taskExecutorService.executeTask('addCartItem', requestParameters.clientInfo, requestParameters.params);
            res.end();
        });

        this.router.delete('/carts/:cartId/items', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);
            let statusKey: string = 'status';
            let status: string = req.params[statusKey];
            requestParameters.params.set(statusKey, status);
            
            this.taskExecutorService.executeTask('deleteCartItems', requestParameters.clientInfo, requestParameters.params);
            res.end();
        });

        this.router.put('/carts/:cartId/items/:itemId', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);

            this.taskExecutorService.executeTask('updateCartItem', requestParameters.clientInfo, requestParameters.params);
            res.end();
        });

        this.router.delete('/carts/:cartId/items/:itemId', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);

            this.taskExecutorService.executeTask('deleteCartItem', requestParameters.clientInfo, requestParameters.params);
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
            clientInfo: new ClientInfo(
                req.get('X-API-CLIENT') || this.defaultClient, 
                req.get('X-API-VERSION') || this.latestVersion),
            params: new Map<string, any>()
        };
        /* tsslint:enable:no-string-literal */
        
        requestParameters.params.set('cartId', requestParameters.cartId);
        requestParameters.params.set('itemId', requestParameters.itemId);

        console.log(`[${req.method}] ${req.originalUrl} [${requestParameters.clientInfo.name}:${requestParameters.clientInfo.version}]`);
        return requestParameters;
    }
}
