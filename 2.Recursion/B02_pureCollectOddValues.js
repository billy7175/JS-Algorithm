function collectOddValues(array) {
    let result = []
    if (array.length === 0) return result
    if (array[0] % 2 !== 0) {
        result.push(array[0])
    }

    
    result = result.concat(collectOddValues(array.slice(1)))
    return result

}

const result = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log('Result : ', result)