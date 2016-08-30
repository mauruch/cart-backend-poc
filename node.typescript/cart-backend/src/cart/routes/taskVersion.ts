import { SemVer } from 'semver';

export default class TaskVersion extends SemVer {
    version: string;
    constructor(version: string) {
        super(version);
        this.version = version;
    }

    public static getApiFormat(folderVersion: string): string {
        let version = folderVersion.replace('v', '');
        let list = version.split('_');
        let versionOneDigit: string = ''; 
        for (let version of list) {
            let oneDigit: string = parseInt(version).toString();
            versionOneDigit += `${oneDigit}.`;
        }
        return versionOneDigit.substr(0, versionOneDigit.length-1);
    }
}