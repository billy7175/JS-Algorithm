function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([100, 23, 67, 50, 1]));

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }

            if (i !== lowest) {
                const temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([100, 23, 67, 50, 1]))

function insertionSort(arr){
    for(var i=1; i<arr.length; i++){
        var currentVal = arr[i]
        for(var j= i-1; j>=0 && arr[j] > currentVal; j--){
            arr[j +1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}
console.log(insertionSort([23, 100, 67, 50, 1]))