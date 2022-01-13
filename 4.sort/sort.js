function bubbleSort(arr){
    // console.log(arr)
    for(var i = arr.length; i>0; i--){
        for(var j=0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
              }
        }
    }
    return arr;
}

console.log(bubbleSort([89,23,66,9,1]))