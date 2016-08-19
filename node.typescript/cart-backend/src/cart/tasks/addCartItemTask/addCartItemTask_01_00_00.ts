import Task from '../../../core/contracts/task';
import Void from '../../../core/entities/void';
import { Promise } from 'es6-promise';

export default class AddCartItemTask_01_00_00 implements Task<Void> {
    public async execute(params: Map<string, any>): Promise<Void> {
        return new Promise(()=> new Void());
    }
}