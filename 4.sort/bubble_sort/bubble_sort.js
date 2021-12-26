function bubbleSort(arr) {
    for(var i=arr.length; i >0; i--){
    // for (var i = 0; i < arr.length; i++) {
        // for (var j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j+1])
        for (var j = 0; j < i-1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([13, 4, 2, 6, 8, 21, 3]))
// 1. Start looping from with a variable called i the end of the array towards the beginning
// 2. Start an inner loop wtth a variable called j from the beginning until i - 1
// 3. if arr[i] is greater than arr[i+1], swap those two values