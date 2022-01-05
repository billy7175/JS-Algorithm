
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
function reverseMap(object, mapping) {
    if (!object) {
        return {};
    }
    const result = {};
    for (const key in mapping) {
        if (object.hasOwnProperty(mapping[key])) {
            result[key] = object[mapping[key]];
        }  else {
            result[key] = null;
        }
    }
    return result;
}

console.log(reverseMap(object,Mapping))