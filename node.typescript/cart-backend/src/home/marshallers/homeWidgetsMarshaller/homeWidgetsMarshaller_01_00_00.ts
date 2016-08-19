import Marshaller from '../../../core/contracts/marshaller';
import HomeWidgets_01_00_00 from '../../entities/homeWidgets/homeWidgets_01_00_00';

export default class HomeWidgetsMarshaller_01_00_00 implements Marshaller<HomeWidgets_01_00_00> {
    public getJson(entity: HomeWidgets_01_00_00): any {
        return entity;
    }
}