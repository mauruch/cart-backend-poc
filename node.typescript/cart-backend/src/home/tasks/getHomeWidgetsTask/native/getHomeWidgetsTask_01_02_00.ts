import Task from '../../../../core/contracts/task';
import HomeWidgetsService from '../../../services/homeWidgetsService'
import { Promise } from 'es6-promise';
import HomeWidgets_01_02_00 from '../../../entities/homeWidgets/native/homeWidgets_01_02_00';
import GetHomeWidgetsTask_01_00_00 from '../getHomeWidgetsTask_01_00_00';

export default class GetHomeWidgetsTask_01_02_00 extends GetHomeWidgetsTask_01_00_00 {
    constructor() {
        super();
    }

    public async execute(params: Map<string, any>): Promise<HomeWidgets_01_02_00> {
        return this.getWidgets();
    }

    protected async getWidgets(): Promise<HomeWidgets_01_02_00> {
        // Using async/await on ES6 promises

        let serviceResults = await Promise.all([
            this.homeWidgetsService.getExhibitors(),
            this.homeWidgetsService.getCategories(),
            this.homeWidgetsService.getFeed(),
            this.homeWidgetsService.getCardCarrousel()
        ]);
        
        let homeWidgets = new HomeWidgets_01_02_00();
        homeWidgets.exhibitors = serviceResults[0];
        homeWidgets.categories = serviceResults[1];
        homeWidgets.feed = serviceResults[2];
        homeWidgets.cardCarrousel = serviceResults[3];

        return Promise.resolve(homeWidgets);
    }
}