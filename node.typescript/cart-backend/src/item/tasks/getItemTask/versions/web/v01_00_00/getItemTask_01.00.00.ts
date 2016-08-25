import Task from '../../../../../../core/contracts/task';
import itemService from '../../services/itemService'
import { Promise } from 'es6-promise';
import Item_01_00_00 from 'item_01_00_00';

export default class GetItemTask_01_00_00 implements Task<Item_01_00_00> {
    protected itemService: itemService;
    
    constructor() {
        this.itemService = new itemService();
    }

    public async execute(params: Map<string, any>): Promise<Item_01_00_00> {
        return this.getWidgets();
    }

    protected async getWidgets(): Promise<Item_01_00_00> {
        // Using async/await on ES6 promises

        let serviceResults = await Promise.all([
            this.itemService.getExhibitors(),
            this.itemService.getHistory(),
            this.itemService.getRegitrationLogin(),
            this.itemService.getCategories(),
            this.itemService.getOfficialStores(),
            this.itemService.getSell(),
            this.itemService.getSiteInformation(),
            this.itemService.getTermsAndConditions()
        ]);
        
        let item = new Item_01_00_00();
        item.exhibitors = serviceResults[0];
        item.history = serviceResults[1];
        item.registrationLogin = serviceResults[2];
        item.categories = serviceResults[3];
        item.officialStores = serviceResults[4];
        item.sell = serviceResults[5];
        item.siteInformation = serviceResults[6];
        item.termsAndConditons = serviceResults[7];

        return Promise.resolve(item);
    }
}