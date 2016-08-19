import Task from '../../../core/contracts/task';
import HomeWidgetsService from '../../services/homeWidgetsService'
import { Promise } from 'es6-promise';
import HomeWidgets_01_00_00 from '../../entities/homeWidgets/homeWidgets_01_00_00';

export default class GetHomeWidgetsTask_01_00_00 implements Task<HomeWidgets_01_00_00> {
    protected homeWidgetsService: HomeWidgetsService;
    
    constructor() {
        this.homeWidgetsService = new HomeWidgetsService();
    }

    public async execute(params: Map<string, any>): Promise<HomeWidgets_01_00_00> {
        return this.getWidgets();
    }

    protected async getWidgets(): Promise<HomeWidgets_01_00_00> {
        // Using async/await on ES6 promises

        let serviceResults = await Promise.all([
            this.homeWidgetsService.getExhibitors(),
            this.homeWidgetsService.getHistory(),
            this.homeWidgetsService.getRegitrationLogin(),
            this.homeWidgetsService.getCategories(),
            this.homeWidgetsService.getOfficialStores(),
            this.homeWidgetsService.getSell(),
            this.homeWidgetsService.getSiteInformation(),
            this.homeWidgetsService.getTermsAndConditions()
        ]);
        
        let homeWidgets = new HomeWidgets_01_00_00();
        homeWidgets.exhibitors = serviceResults[0];
        homeWidgets.history = serviceResults[1];
        homeWidgets.registrationLogin = serviceResults[2];
        homeWidgets.categories = serviceResults[3];
        homeWidgets.officialStores = serviceResults[4];
        homeWidgets.sell = serviceResults[5];
        homeWidgets.siteInformation = serviceResults[6];
        homeWidgets.termsAndConditons = serviceResults[7];

        return Promise.resolve(homeWidgets);
    }
}