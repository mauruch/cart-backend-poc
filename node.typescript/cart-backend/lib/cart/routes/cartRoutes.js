"use strict";
const express = require('express');
class CartRoutes {
    constructor(taskExecutorService) {
        this.taskExecutorService = taskExecutorService;
        this.router = express.Router();
    }
    register() {
        this.router.get('/carts/:cartId', (req, res) => {
            let requestParameters = this.getRequestParameters(req);
            let cart = this.taskExecutorService.executeTask('getCart', requestParameters.apiClient, requestParameters.apiVersion, requestParameters.params);
            res.send(cart);
        });
        this.router.delete('/cartst/:cartId', (req, res) => {
            let requestParameters = this.getRequestParameters(req);
            res.status(200);
            res.end();
        });
        this.router.post('/carts/:cartId', (req, res) => {
            let requestParameters = this.getRequestParameters(req);
            res.end();
        });
        this.router.delete('/carts/:cartId/items', (req, res) => {
            let requestParameters = this.getRequestParameters(req);
            let statusKey = 'status';
            let status = req.params[statusKey];
            res.end();
        });
        this.router.put('/carts/:cartId/items/:itemId', (req, res) => {
            let requestParameters = this.getRequestParameters(req);
            res.end();
        });
        this.router.delete('/carts/:cartId/items/:itemId', (req, res) => {
            let requestParameters = this.getRequestParameters(req);
            res.end();
        });
        return this;
    }
    getRouter() {
        return this.router;
    }
    getRequestParameters(req) {
        let requestParameters = {
            cartId: req.params['cartId'],
            itemId: req.params['itemId'] || null,
            apiClient: req.get('X-API-CLIENT') || null,
            apiVersion: req.get('X-API-VERSION') || null,
            params: new Map()
        };
        requestParameters.params.set('cartId', requestParameters.cartId);
        requestParameters.params.set('itemId', requestParameters.itemId);
        console.log(`[${req.method}] ${req.originalUrl} [${requestParameters.apiClient}:${requestParameters.apiVersion}]`);
        return requestParameters;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CartRoutes;
//# sourceMappingURL=cartRoutes.js.map