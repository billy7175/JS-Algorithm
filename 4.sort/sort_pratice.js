// 1. Create Bubble Sort Function
function bubbleSort (arr){
    var noSwaps;
    for(var i=arr.length; i>0; i--){
        noSwaps = true;
        for(var j=0; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp 
                noSwaps = false;
                console.log(i, j)
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([56,23,1,77,9]))

// 2. Create Selection Sort Function

// 3. Insertion Sort Function