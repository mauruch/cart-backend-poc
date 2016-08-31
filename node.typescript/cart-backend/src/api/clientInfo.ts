import { SemVer } from 'semver';
import TaskVersion from '../cart/routes/taskVersion';


export default class ClientInfo {
    name: string;
    version: TaskVersion;
    constructor(name: string, version: string) {
        this.name = name || null;
        this.version = new TaskVersion(version);
    }
}
