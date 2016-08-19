import Entity from './entity';
import { Promise } from 'es6-promise';

interface Task<T extends Entity> {
    execute(params: Map<string, any>): Promise<T>;
}
                                           
export default Task;