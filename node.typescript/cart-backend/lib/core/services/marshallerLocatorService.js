"use strict";
const cartMarshaller_1 = require('../../cart/marshallers/cartMarshaller');
const voidMarshaller_1 = require('../marshallers/voidMarshaller');
class MarshallerLocatorService {
    get(entity) {
        let className = entity.constructor.name;
        if (className == 'Cart') {
            return new cartMarshaller_1.default();
        }
        if (className == 'Void') {
            return new voidMarshaller_1.default();
        }
        return null;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarshallerLocatorService;
//# sourceMappingURL=marshallerLocatorService.js.map