const Mapping = {
    'ID': 'id',
    'LotSerial': 'rollNumber',
    'User15': 'quantity',
    'Footage': 'footage',
    'LotType': 'rollType',
    'status': 'rollStatus',
    'UOM': 'uom',
};

const object = {
    'ID': 'id',
    'LotSerial': 'rollNumber',

};

function mappingFunction(object, mapping) {
    const result = {};
    for (const key in mapping) {
        const newKey = mapping[key];
        /// 01.
        // if (object.hasOwnProperty(key)) {
        //     result[newKey] = object[key];
        // } else {
        //     result[newKey] = null;
        // }

        /// 02.
        // console.log('02')
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            result[newKey] = object[key];
        } else {
            result[newKey] = null;
        }
    }
    return result;
}

    console.log(mappingFunction(object, Mapping))