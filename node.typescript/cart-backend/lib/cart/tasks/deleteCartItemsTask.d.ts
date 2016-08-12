import Task from '../../core/contracts/task';
import Void from '../../core/entities/void';
export default class DeleteCartItemsTask implements Task<Void> {
    execute(params: Map<string, any>): Void;
}
