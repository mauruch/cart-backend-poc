import Entity from '../contracts/entity';
import Task from '../contracts/task';
import GetCartTask from '../../cart/tasks/getCartTask/default/v01.00.00/getCartTask';
import DeleteCartTask_01_00_00 from '../../cart/tasks/deleteCartTask/deleteCartTask_01_00_00';
import AddCartItemTask_01_00_00 from '../../cart/tasks/addCartItemTask/addCartItemTask_01_00_00';
import DeleteCartItemsTask_01_00_00 from '../../cart/tasks/deleteCartItemsTask/deleteCartItemsTask_01_00_00';
import UpdateCartItemTask_01_00_00 from '../../cart/tasks/updateCartItemTask/updateCartItemTask_01_00_00';
import DeleteCartItemTask_01_00_00 from '../../cart/tasks/deleteCartItemTask/deleteCartItemTask_01_00_00';
import GetHomeWidgetsTask_01_00_00 from '../../home/tasks/getHomeWidgetsTask/getHomeWidgetsTask_01_00_00';
import GetHomeWidgetsTask_01_02_00 from '../../home/tasks/getHomeWidgetsTask/native/getHomeWidgetsTask_01_02_00';
import GetHomeWidgetsTask_01_02_01 from '../../home/tasks/getHomeWidgetsTask/native/android/getHomeWidgetsTask_01_02_01';
import DynamicClass from '../../cart/routes/dynamicClass'
import TaskVersion from '../../cart/routes/taskVersion'
import {TreeVersion, Node} from '../../cart/routes/treeVersion'

export default class TaskLocatorService {
    public get(taskName: string, apiClient: string, apiVersion: TaskVersion): any {

		// let taskMap: Map<string, Array<Map<string, string>>> = new Map();
		let treeVersion: TreeVersion = new TreeVersion();
        this.addVersionsToTree('src/cart/tasks/getCartTask', treeVersion);

		treeVersion.buildTree();
		treeVersion.findVersion(treeVersion.root, apiClient, apiVersion);

		// let tasksByClient: string = taskMap.get(apiClient);
		
		// [0].get(apiVersion.versionTwoDigits);


		return new DynamicClass('getCartTask_v01_00_00');

	}

	private addVersionsToTree(currentDirPath: string, treeVersion: TreeVersion): void {
        let fs = require('fs');
        let path = require('path');
        var self = this;
        fs.readdirSync(currentDirPath).forEach(function (name: any) {
            var filePath = path.join(currentDirPath, name);
            var stat = fs.statSync(filePath);
            if (stat.isFile()) {
				let dirname = path.dirname(filePath);
				let version = dirname.substr(dirname.lastIndexOf("/")+1, dirname.length).replace(/\./g,'_');
				let auxClient = dirname.substr(0, dirname.lastIndexOf("/"));
				let client = auxClient.substr(auxClient.lastIndexOf("/")+1, auxClient.length);
				let taskName = path.parse(filePath).name;
				if (taskName === 'getCartTask') {
					// let array = taskMap.get(client);

					let newVersion = new Map();
					newVersion.set(TaskVersion.getApiFormat(version), taskName+`_${version}`);
					treeVersion.addNode(new Node(newVersion, client));
					// if (!array) {
					// 	taskMap.set(client, [newVersion]);
					// } else {
					// 	array.push(newVersion);
					// }
				}
            } else if (stat.isDirectory()) {
                self.addVersionsToTree(filePath, treeVersion);
            }
        });
    }
}