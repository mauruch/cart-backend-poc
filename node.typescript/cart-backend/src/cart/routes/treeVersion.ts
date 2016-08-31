import TaskVersion from './taskVersion';
import * as semver from 'semver';

const versionLevels: any = {
        default: 0, //ROOT
        web: 1,
    	native: 1,
		ios: 2,
		android: 2
    }

export class TreeVersion {
    root: Node;
    nodes: Map<string, Array<Map<string, string>>>;
    found: boolean = false;
    taskFound: string;
    constructor() {
        this.nodes = new Map();
    }

    public addNode(node: Node): void {
        let array = this.nodes.get(node.client);
        if (!array) {
			this.nodes.set(node.client, [node.data]);
		} else {
			array.push(node.data);
		}
    }

    public buildTree(): void {
        let defaultVersion = this.nodes.get('default');
        this.root = new Node(defaultVersion, 'default');

        let nativeVersion = this.nodes.get('native');
        let nativeNode = new Node(nativeVersion, 'native');
        this.root.children.push(nativeNode);
        this.root.children[0].parent = this.root;

        let iosVersion = this.nodes.get('ios');
        this.root.children[0].children.push(new Node(iosVersion, 'ios'));
        this.root.children[0].children[0].parent = nativeNode;

        let androidVersion = this.nodes.get('android');
        if (androidVersion) {
            this.root.children[0].children.push(new Node(androidVersion, 'android'));
            this.root.children[0].children[0].parent = nativeNode;
        }
    }

    public findVersion(currentNode: Node, apiClient: string, apiVersion: TaskVersion): void {
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            this.findVersion(currentNode.children[i], apiClient, apiVersion);
        }
        let clientLevel = versionLevels[apiClient];
        let currentNodeLevel = versionLevels[currentNode.client];
        if ((clientLevel > currentNodeLevel && !this.found) || 
            (clientLevel == currentNodeLevel && apiClient === currentNode.client)) {

            // Map { '2.0.0' => 'getCartTask_v02_00_00' }, Map { '2.5.0' => 'getCartTask_v02_05_00' } ]
            let candidateByClient: Array<Map<any, any>> = [];
            let candidateVersionByClient: Array<string> = [];
            for (let versionData of currentNode.data) {
                let taskVersion: string = versionData.keys().next().value;
                if (semver.gte(apiVersion.version, taskVersion)) {
                    candidateByClient.push(versionData);
                    candidateVersionByClient.push(taskVersion);
                }
            }
            if (candidateByClient.length > 1) {
                this.found = true;
                let versionFound: string = semver.maxSatisfying(candidateVersionByClient, `>=0.0.0 <100.0.0`);
                for (let map of candidateByClient) {
                    if (map.keys().next().value === versionFound) {
                        this.taskFound = map.get(map.keys().next().value );
                    }
                }
            } else if (candidateByClient.length == 1) {
                this.found = true;
                this.taskFound = candidateByClient[0].get(candidateByClient[0].keys().next().value);
            } 
        }
    }
}

export class Node {
    data: any;
    parent: Node;
    children: any;
    client: string;

    constructor(data: any, client: string) {
        this.data = data;
        this.client = client;
        this.parent = null;
        this.children = [];
    }
}