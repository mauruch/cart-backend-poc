import { Promise } from 'es6-promise';
import HomeWidgets from '../entities/homeWidgets/homeWidgets_01_00_00';

export default class HomeWidgetService {
    public async getExhibitors(): Promise<Array<string>> {
        return Promise.resolve(['exhibitor 1', 'exhibitor 2']);
    }

    public async getHistory(): Promise<Array<string>> {
        return Promise.resolve(['history 1', 'history 2']);
    }

    public async getRegitrationLogin(): Promise<Array<string>> {
        return Promise.resolve(['reg login 1', 'reg login 2']);
    }

    public async getCategories(): Promise<Array<string>> {
        return Promise.resolve(['category 1', 'category 2']);
    }

    public async getOfficialStores(): Promise<Array<string>> {
        return Promise.resolve(['official store 1', 'official store 2']);
    }

    public async getSell(): Promise<Array<string>> {
        return Promise.resolve(['sell 1', 'sell 2']);
    }

    public async getSiteInformation(): Promise<Array<string>> {
        return Promise.resolve(['site info 1', 'site info 2']);
    }

    public async getTermsAndConditions(): Promise<string> {
        return Promise.resolve('My terms and conditions!');
    }

    public async getFeed(): Promise<Array<string>> {
        return Promise.resolve(['feed 1', 'feed 2']);
    }

    public async getCardCarrousel(): Promise<Array<string>> {
        return Promise.resolve(['carrousel item 1', 'carrousel item 2']);
    }
}