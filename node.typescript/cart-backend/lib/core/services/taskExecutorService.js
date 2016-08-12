"use strict";
class TaskExecutorService {
    constructor(taskLocatorService, marshallerLocatorService) {
        this.taskLocatorService = taskLocatorService;
        this.marshallerLocatorService = marshallerLocatorService;
    }
    executeTask(taskName, apiClient, apiVersion, params) {
        let task = this.taskLocatorService.get(taskName, apiClient, apiVersion);
        if (!task) {
            throw new Error(`Cannot find task ${taskName}`);
        }
        let entity = task.execute(params);
        if (!entity) {
            return null;
        }
        let marshaller = this.marshallerLocatorService.get(entity);
        let json = marshaller.getJson(entity);
        return json;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskExecutorService;
//# sourceMappingURL=taskExecutorService.js.map