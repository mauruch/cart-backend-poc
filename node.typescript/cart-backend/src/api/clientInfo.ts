import { SemVer } from 'semver';


export default class ClientInfo {
    name: string;
    version: SemVer;
    constructor(name: string, version: string) {
        this.name = name || null;
        this.version = new SemVer(version);
    }
}
