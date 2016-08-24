import Task from '../../../core/contracts/Task';
import Cart_01_00_00 from '../../entities/cart/Cart_01_00_00';
import CartItem_01_00_00 from '../../entities/cartItem/CartItem_01_00_00';
import CartConfig_01_00_00 from '../../config/CartConfig_01_00_00';
import { Promise } from 'es6-promise';
import CartService from '../../services/CartService';
import UserService from '../../services/UserService';
import ShippingService from '../../services/ShippingService';
import LocalizationProvider from '../../../framework/i18n/LocalizationProvider';

export default class GetCartTask_01_00_00 implements Task<Cart_01_00_00> {
    config: CartConfig_01_00_00 = new CartConfig_01_00_00();
    cartService: CartService = new CartService();
    userService: UserService = new UserService();
    shippingService: ShippingService = new ShippingService();
    
    localizationProvider: LocalizationProvider = new LocalizationProvider({
        "shipping_label": "eitiquetirijilla de envirijillo",
        "payment_label": "eitiquetirijilla de paguirijillo",
        "disabled_label": "eitiquetirijilla de deshabilitamientirijillo"
    });

    public async execute(params: Map<string, any>): Promise<Cart_01_00_00> {
        let self = this;
        let cartId: string = params.get('cartId');
        let userId: string = '83199529'; // params.get('userId'); // TODO: ????????

        // for testing purposes, move to service
        if (cartId === '404') {
            return null;
        }

        let user: any;
        let cartInfo: any;

        return Promise.all([
            this.userService.getUser(userId),
            this.cartService.getCart(cartId, userId)
        ]).then((results) => {
            user = results[0];
            cartInfo = results[1];

            return self.shippingService.getShippingInfo(user.id);
        }).then((shippingInfo) => {
            //shippingInfo.some;
            //user.some;
            //cartInfo.some;

            let cart = this.bindCart(cartInfo);

            return cart;
        });
    }

    protected bindCart(cartInfo: any): Cart_01_00_00 {
        let cart = {
            id: cartInfo.id,
            items: <any>[],
            saved_items: <any>[],
            shipping_price: {
                amount: 111,
                currency_id: ''
            },
            shipping_action: {
                label: '',
                url: ''
            },
            price_label: '?????',
            price: 999,
            checkout_action: {
                label: '',
                url: ''
            }
        };
        cart.items = [];
        cart.saved_items = [];

        cartInfo.items.active.forEach((item: any) => {
            cart.items.push(this.bindItem(item));
        });

        cartInfo.items.saved_for_later.forEach((item: any) => {
            cart.saved_items.push(this.bindItem(item));
        });

        return cart;
    }

    protected bindItem(item: any): CartItem_01_00_00 {
        return {
            id: item.id,
            title: item.title,
            picture_url: '?????',
            attributes: {},
            permalink: item.permalink,
            shipping_label: this.localizationProvider.getSync('shipping_label'),
            payment_label: this.localizationProvider.getSync('payment_label'),
            quantity: item.quantity,
            stock: item.available_quanity,
            discount_rate: '?????',
            original_price: {
                amount: item.price,
                currency_id: item.currency_id
            },
            price: {
                amount: item.price,
                currency_id: item.currency_id
            },
            checkout_action: {
                label: '',
                url: ''
            },
            disabled_label: this.localizationProvider.getSync('disabled_label'),
            disabled_action: {
                label: '',
                url: ''
            }
        };
    }
}