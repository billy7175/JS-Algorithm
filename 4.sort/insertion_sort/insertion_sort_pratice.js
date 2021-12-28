function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        console.log('i: ', i, arr[i])
        currentVal = arr[i];
        // && arr[j] > currentVal;
        for(var j = i - 1; j >= 0 && arr[j] > currentVal;  j--) {
            console.log('@@@@@@@ J : ', j)
            console.log(arr[j],'>',currentVal)
            console.log('1 :', arr)
            arr[j+1] = arr[j]
            console.log('2 :', arr)
        }
        
        arr[j+1] = currentVal;
        console.log('3 :', arr)
        console.log('------------')

    }
    return arr;
}

console.log(insertionSort([37,1,9,76,4]))