function solution (array ,target){
  let start = 0;
  let end = array.length;
  let middle = Math.floor((start + end) / 2);
  while(array[middle] !== target && start <= end){
    if(target < array[middle]){
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2) ;

  }
  if(array[middle] === target){
    return middle
  }
  return -1
}


console.log(solution([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3))