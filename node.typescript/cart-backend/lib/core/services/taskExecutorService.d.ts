import TaskLocatorService from './taskLocatorService';
import MarshallerLocatorService from './marshallerLocatorService';
export default class TaskExecutorService {
    taskLocatorService: TaskLocatorService;
    marshallerLocatorService: MarshallerLocatorService;
    constructor(taskLocatorService: TaskLocatorService, marshallerLocatorService: MarshallerLocatorService);
    executeTask(taskName: string, apiClient: string, apiVersion: string, params: Map<string, any>): any;
}
