import Task from '../../../../../core/contracts/task';
import HomeWidgetsService from '../../../../services/homeWidgetsService'
import { Promise } from 'es6-promise';
import * as _ from  'lodash';
import HomeWidgets_01_02_00 from '../../../../entities/homeWidgets/native/homeWidgets_01_02_00';
import GetHomeWidgetsTask_01_02_00 from '../getHomeWidgetsTask_01_02_00';

export default class GetHomeWidgetsTask_01_02_01 extends GetHomeWidgetsTask_01_02_00 {
    constructor() {
        super();
    }

    public async execute(params: Map<string, any>): Promise<HomeWidgets_01_02_00> {
        let homeWidgets = await this.getWidgets();
        homeWidgets.exhibitors = _.map(homeWidgets.exhibitors, x => x += ' (modified for native android)');

        let firstItem = _.first(homeWidgets.exhibitors);
        firstItem += '[collection work sample on first item]';
        homeWidgets.exhibitors[0] = firstItem;

        return Promise.resolve(homeWidgets);
    }
}