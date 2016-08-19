import TaskLocatorService from './taskLocatorService';
import MarshallerLocatorService from './marshallerLocatorService';
import Entity from '../contracts/entity';
import Task from '../contracts/task';
import Marshaller from '../contracts/marshaller';
import ClientInfo from '../../api/clientInfo';
import { Promise } from 'es6-promise';

export default class TaskExecutorService {
    constructor(public taskLocatorService: TaskLocatorService, public marshallerLocatorService: MarshallerLocatorService) { 
    }

    public async executeTask(taskName: string, clientInfo: ClientInfo, params: Map<string, any>): Promise<any> {
        let task: Task<Entity> = this.taskLocatorService.get(taskName, clientInfo.name, clientInfo.version);

        if (!task) {
            throw new Error(`Cannot find task ${taskName}`);
        }

        let entity: Entity = await task.execute(params);

        if (!entity) {
            return Promise.resolve(null);
        }

        let marshaller: Marshaller<Entity> = this.marshallerLocatorService.get(entity, clientInfo.name, clientInfo.version);

        let json: any = marshaller.getJson(entity);

        return Promise.resolve(json);
    }
}