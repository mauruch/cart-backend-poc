import getCartTask_v01_00_00 from '../tasks/getCartTask/default/v01.00.00/getCartTask';
import getCartTask_v02_00_00 from '../tasks/getCartTask/default/native/v02.00.00/getCartTask';

// Use ES6 Object Literal Property Value Shorthand to maintain a map
// where the keys share the same names as the classes themselves
let classes: any = {
    getCartTask_v01_00_00,
    getCartTask_v02_00_00
};

class DynamicClass {
    constructor (className: string) {
        return new classes[className]();
    }
}

export default DynamicClass;
