import { Promise } from 'es6-promise';
import RestClient from '../../framework/http/RestClient';
import CartConfig_01_00_00 from '../config/CartConfig_01_00_00';

export default class ShippingService {
    private config: CartConfig_01_00_00 = new CartConfig_01_00_00();

    public async getShippingInfo(id: string): Promise<any> {
        return RestClient.get({
            url: `${this.config.internalApiUrl}/shipping`,
            queryParams: {
                id: '',
                caller: ''
            }
        });
    }
}