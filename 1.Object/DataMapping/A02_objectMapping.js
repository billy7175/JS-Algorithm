const Mapping = {
    'User15': {
        newName: 'quantity',
        defaultValue: 0,
        processValue: (value) => Math.round(value),
    }
};


const object = {
    'ID': 'id',
    'LotSerial': 'rollNumber',
    'User15':123

}

function mappingFunction(object, mapping) {
    const result = {};
    for (const key in mapping) {
        if (object.hasOwnProperty(key)) {
            const newKey = mapping[key].newName;
            result[newKey] = mapping[key].processValue(object[key]);
        } else {
            const newKey = mapping[key].newName;
            result[newKey] = mapping[key].defaultValue;
        }
    }
    return result;
}

console.log(mappingFunction(object, Mapping))