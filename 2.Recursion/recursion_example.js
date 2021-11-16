
function countDown(number) {
  if (number <= 0) return
  console.log(number)
  number--;
  countDown(number)
}

// countDown(10);

function sumRange (num){
  if(num === 1) return 1;
  console.log(num)
  return num + sumRange(num - 1)
}

// console.log(sumRange(100))


function factorial(num){
  if(num === 1) return 1;
  return num * factorial(num-1);
}

console.log(factorial(7))