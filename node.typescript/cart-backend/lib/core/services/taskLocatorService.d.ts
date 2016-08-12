import Entity from '../contracts/entity';
import Task from '../contracts/task';
export default class TaskLocatorService {
    get(taskName: string, apiClient: string, apiVersion: string): Task<Entity>;
}
