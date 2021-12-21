function sumRange(number){
    if (number ===0 ) return 0   
    return number + sumRange(number -1)
}

console.log(sumRange(100))