import { Promise } from 'es6-promise';

export default class LocalizationProvider {
    messages: any

    constructor(messages: any) {
        this.messages = messages;
    }

    public async get(key: string): Promise<string> {
        return Promise.resolve(this.internalGet(key));
    }

    public getSync(key: string): string {
        return this.internalGet(key);
    }

    protected internalGet(key: string): string {
        return `[TRANSLATED] ${this.messages[key]}`;
    }
} 