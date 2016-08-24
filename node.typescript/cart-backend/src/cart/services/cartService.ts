import { Promise } from 'es6-promise';
import RestClient from '../../framework/http/RestClient';
import CartConfig_01_00_00 from '../config/CartConfig_01_00_00';

export default class CartService {
    private config: CartConfig_01_00_00 = new CartConfig_01_00_00();

    public async getCart2(cartId: string, userId: string): Promise<any> {
        return RestClient.get({
            url: `${this.config.internalApiUrl}/carts/${cartId}`,
            queryParams: {
                "caller.id": userId
            }
        });
    }

    public async getCart(cartId: string, userId: string): Promise<any> {
        var cartMock: any = {
            "id": "23ASLKJ234292LL",
            "date_created": "2016-05-19T15:29:50.000-04:00",
            "last_updated": "2016-05-19T15:29:50.000-04:00",
            "items": {
                "active": [
                    {
                        "id": "MLA613850548",
                        "title": "Raspberry Pi 3 B 1.2ghz Quad Core 1gb Wifi Bluetooth Nubbeo",
                        "quantity": 2,
                        "available_quantity": 5,
                        "price": 1499,
                        "currency_id": "ARS",
                        "category_id": "MLA12812",
                        "picture_id": "493221-MLA20726368976_052016",
                        "permalink": "http://articulo.mercadolibre.com.ar/MLA-613850548-raspberry-pi-3-b-12ghz-quad-core-1gb-wifi-bluetooth-nubbeo-_JM",
                        "status": "active",
                        "shipping": {
                            "mode": "me2",
                            "free_shipping": false
                        },
                        "listing_type_id": "gold_special",
                        "variation": {},
                        "stale_attributes": {
                            "price": 1200
                        }
                    },
                    {
                        "id": "MLA612636307",
                        "title": "Samsung Galaxy J7 Sm-j700m Libres + 1 Año De Garantia",
                        "quantity": 3,
                        "available_quantity": 5,
                        "price": 100,
                        "currency_id": "ARS",
                        "category_id": "MLA391860",
                        "picture_id": "541801-MLA20421015412_092015",
                        "permalink": "http://articulo.mercadolibre.com.ar/MLA-612636307-samsung-galaxy-j7-sm-j700m-libres-1-ano-de-garantia-_JM",
                        "status": "active",
                        "shipping": {
                            "mode": "me2",
                            "free_shipping": true
                        },
                        "listing_type_id": "gold_special",
                        "variation": {
                        },
                        "stale_attributes": {
                            "price": 130,
                            "shipping": {
                                "mode": "me2",
                                "free_shipping": false
                            },
                            "listing_type_id": "bronze"
                        }
                    },
                    {
                        "id": "MLA626090198",
                        "title": "Zapatillas Olympikus Modelo Training Mix Negro/rojo",
                        "quantity": 1,
                        "available_quantity": 52,
                        "price": 949,
                        "currency_id": "ARS",
                        "category_id": "MLA361871",
                        "picture_id": "504521-MLA20796351243_072016",
                        "permalink": "http://articulo.mercadolibre.com.ar/MLA-626090198-zapatillas-olympikus-modelo-training-mix-negrorojo-_JM",
                        "status": "active",
                        "shipping": {
                            "mode": "me2",
                            "free_shipping": true
                        },
                        "listing_type_id": "gold",
                        "variation": {
                            "id": 11936894675,
                            "attribute_combinations": [
                                {
                                    "id": "83000",
                                    "name": "Color Primario",
                                    "value_id": "92025",
                                    "value_name": "Negro"
                                },
                                {
                                    "id": "73001",
                                    "name": "Color Secundario",
                                    "value_id": "82026",
                                    "value_name": "Rojo"
                                },
                                {
                                    "id": "73002",
                                    "name": "Talle",
                                    "value_id": "82077",
                                    "value_name": "43"
                                }]
                        },
                        "stale_attributes": {
                        }
                    }],
                "saved_for_later": [
                    {
                        "id": "MLA630544012",
                        "title": "Placa De Video Ati Radeon Xfx Rx480 8gb Oc Black Edition",
                        "quantity": 1,
                        "available_quantity": 12,
                        "price": 7599.99,
                        "currency_id": "ARS",
                        "category_id": "MLA75549",
                        "picture_id": "435405-MLA20856768798_082016",
                        "permalink": "http://articulo.mercadolibre.com.ar/MLA-630544012-placa-de-video-ati-radeon-xfx-rx480-8gb-oc-black-edition-_JM",
                        "status": "active",
                        "shipping": {
                            "mode": "me2",
                            "free_shipping": true
                        },
                        "listing_type_id": "gold_special",
                        "variation": {},
                        "stale_attributes": {
                            "price": 9600,
                            "listing_type_id": "bronze"
                        }
                    }
                ]
            }
        };

        return Promise.resolve(cartMock);
    }
}