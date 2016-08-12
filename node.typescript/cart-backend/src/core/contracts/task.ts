import Entity from './entity';

interface Task<T extends Entity> {
    execute(params: Map<string, any>): T;
}
                                           
export default Task;