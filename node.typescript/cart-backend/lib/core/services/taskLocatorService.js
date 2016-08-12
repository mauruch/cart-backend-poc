"use strict";
const getCartTask_1 = require('../../cart/tasks/getCartTask');
const deleteCartTask_1 = require('../../cart/tasks/deleteCartTask');
const addCartItemTask_1 = require('../../cart/tasks/addCartItemTask');
const deleteCartItemsTask_1 = require('../../cart/tasks/deleteCartItemsTask');
const updateCartItemTask_1 = require('../../cart/tasks/updateCartItemTask');
const deleteCartItemTask_1 = require('../../cart/tasks/deleteCartItemTask');
class TaskLocatorService {
    get(taskName, apiClient, apiVersion) {
        switch (taskName) {
            case "getCart":
                return new getCartTask_1.default();
            case "deleteCart":
                return new deleteCartTask_1.default();
            case "addCartItem":
                return new addCartItemTask_1.default();
            case "deleteCartItems":
                return new deleteCartItemsTask_1.default();
            case "updateCartItem":
                return new updateCartItemTask_1.default();
            case "deleteCartItem":
                return new deleteCartItemTask_1.default();
            default:
                return null;
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskLocatorService;
//# sourceMappingURL=taskLocatorService.js.map