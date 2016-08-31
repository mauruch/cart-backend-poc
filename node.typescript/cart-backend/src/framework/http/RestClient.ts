import * as request from 'request';
import { Promise } from 'es6-promise';
import RestRequestConfig from './RestRequestConfig';

export default class RestClient {
    public static async get(config: RestRequestConfig): Promise<any> {
        return new Promise(function (resolve, reject) {
            request.get(RestClient.getRequestOptions(config), function (error: any, response: any, body: any) {
                if (!error && response.statusCode == 200) {
                    let contentType: string = response.headers['content-type'];
                    let data: any = null;
                    if (contentType && contentType.indexOf('application/json') != -1) {
                        data = JSON.parse(body);
                    }
                    resolve(data);
                } else {
                    reject(error);
                }
            });
        });
    }

    public static async post(config: RestRequestConfig): Promise<any> {
        return Promise.resolve({});
    }

    public static async put(config: RestRequestConfig): Promise<any> {
        return Promise.resolve({});
    }

    public static async delete(config: RestRequestConfig): Promise<any> {
        return Promise.resolve({});
    }

    protected static getRequestOptions(config: RestRequestConfig): any {
        let options: any = {};
        options.url = config.url;
        if (config.headers) {
            options.headers = {};
            let iterator = Object.keys(config.headers);
            iterator.forEach((key:any) => { options.headers[key] = config.headers[key] });
        }

        if (config.queryParams) {
            options.qs = {};
            let iterator = Object.keys(config.queryParams);
            iterator.forEach((key:any) => { options.qs[key] = config.queryParams[key] });
        }

        if (config.data) {
            options.json = config.data;
        }

        // TODO: implement
        return options;
    }
}
