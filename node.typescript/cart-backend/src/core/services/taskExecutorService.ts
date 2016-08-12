import TaskLocatorService from './taskLocatorService';
import MarshallerLocatorService from './marshallerLocatorService';
import Entity from '../contracts/entity';
import Task from '../contracts/task';
import Marshaller from '../contracts/marshaller';

export default class TaskExecutorService {
    constructor(public taskLocatorService: TaskLocatorService, public marshallerLocatorService: MarshallerLocatorService) { 
    }

    public executeTask(taskName: string, apiClient: string, apiVersion: string, params: Map<string, any>): any {
        let task: Task<Entity> = this.taskLocatorService.get(taskName, apiClient, apiVersion);

        if (!task) {
            throw new Error(`Cannot find task ${taskName}`);
        }

        let entity: Entity = task.execute(params);

        if (!entity) {
            return null;
        }

        let marshaller: Marshaller<Entity> = this.marshallerLocatorService.get(entity);

        let json: any = marshaller.getJson(entity);

        return json;
    }
}