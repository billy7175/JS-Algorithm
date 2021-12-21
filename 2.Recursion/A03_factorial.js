function factorial (number){
    if(number === 1) return 1
    return number * factorial(number -1)
}

const solution = factorial(8)
console.log('solution : ', solution)