import * as express from 'express';
import { SemVer } from 'semver';
import RequestParameters from '../../api/requestParameters';
import ClientInfo from '../../api/clientInfo';
import TaskExecutorService from '../../core/services/taskExecutorService';

export default class HomeRoutes {
    router: express.Router;
    defaultClient: string;
    latestVersion: string;

    constructor(public taskExecutorService: TaskExecutorService) {
        this.router = express.Router();

        this.defaultClient = 'web';
        this.latestVersion = '2.0.0';
    }

    public register(): HomeRoutes {
        this.router.get('/home/widgets', (req, res) => {
            let requestParameters: RequestParameters = this.getRequestParameters(req);
            
            this.taskExecutorService.executeTask('getHomeWidgets', requestParameters.clientInfo, requestParameters.params)
                .then(function(json) {
                    // TODO: move to middleware
                    if (!json) {
                        res.status(404);
                        res.end();
                        return;
                    }

                    res.send(json);
                    res.end();
                })
                .catch(function(err) {
                    console.log('error::executeTask');
                    console.log(err);
                    res.end();
                });
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
                req.get('X-API-CLIENT-NAME') || this.defaultClient, 
                req.get('X-API-CLIENT-VERSION') || this.latestVersion),
            params: new Map<string, any>()
        };
        /* tsslint:enable:no-string-literal */
        
        requestParameters.params.set('cartId', requestParameters.cartId);
        requestParameters.params.set('itemId', requestParameters.itemId);

        console.log(`[${req.method}] ${req.originalUrl} [${requestParameters.clientInfo.name}:${requestParameters.clientInfo.version}]`);
        return requestParameters;
    }
}
