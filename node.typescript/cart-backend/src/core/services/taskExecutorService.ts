import TaskLocatorService from './taskLocatorService';
import MarshallerLocatorService from './marshallerLocatorService';
import Entity from '../contracts/entity';
import Task from '../contracts/task';
import Marshaller from '../contracts/marshaller';
import ClientInfo from '../../api/clientInfo';

export default class TaskExecutorService {
    constructor(public taskLocatorService: TaskLocatorService, public marshallerLocatorService: MarshallerLocatorService) { 
    }

    public executeTask(taskName: string, clientInfo: ClientInfo, params: Map<string, any>): any {
        let task: Task<Entity> = this.taskLocatorService.get(taskName, clientInfo.name, clientInfo.version);

        if (!task) {
            throw new Error(`Cannot find task ${taskName}`);
        }

        let entity: Entity = task.execute(params);

        if (!entity) {
            return null;
        }

        let marshaller: Marshaller<Entity> = this.marshallerLocatorService.get(entity, clientInfo.version);

        let json: any = marshaller.getJson(entity);

        return json;
    }
}