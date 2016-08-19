import Entity from '../../../core/contracts/entity';

export default class HomeWidgets_01_00_00 implements Entity {
    
    exhibitors: Array<string>;
    history: Array<string>;
    registrationLogin: Array<string>;
    categories: Array<string>;
    officialStores: Array<string>;
    sell: Array<string>;
    siteInformation: Array<string>;
    termsAndConditons: string;

    constructor() {
    }
}
