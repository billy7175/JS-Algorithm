var number = [100,30,35,110,25,73,10]
var numberString = ["100","30","35","110","25","73","10"]
function compare(a,b){
  return a-b;
}

console.log(number.sort(compare))
console.log(numberString.sort(compare))