function solution (long, short){
  var count = 0;
  for(var i=0; i <long.length; i++){
    for(var j=0; j < short.length; j++){
      console.log(long[j],  short[i+j])
      console.log(j, j+i)
      if(short[j] !== long[i+j]){
        break;
      }
    }
  }
}

console.log(solution('lorie loled', 'lol'))