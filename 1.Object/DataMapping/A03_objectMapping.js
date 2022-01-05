
    const Mapping = {
		'created_at' : {
            newName: 'createdAt',
            setValue: (object) => object['created_at'],
		},
        'newMappedField1': {
            newName: 'createdAtUsFormat',
            setValue: (object) => object['created_at']+' '+'SAMPLE01',
        },
        'newMappedField2': {
            newName: 'asdasd',
            setValue: (object) => object['created_at']+' '+'SAMPLE01',
        }
    };

    const object = {
        'ID': 'id',
        'LotSerial': 'rollNumber',
        'User15':123 ,
        'created_at':'2012-10-10',
        'createdAt':'2012-10-10'
    }
    

    function mappingFunction(object, mapping) {
        const result = {};
        for (const key in mapping) {
                const newKey = mapping[key].newName;
                result[newKey] = mapping[key].setValue(object);
            }
        
        return result;
    }

    console.log(mappingFunction(object, Mapping))