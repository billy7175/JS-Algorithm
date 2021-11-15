function solution (str){
  // make object return at end
  var obj = {};

  for(var i = 0; i < str.length; i++){
    var char = str[i].toLowerCase()
      // if the char is a number/letter AND is a key in object, add one to count
    if(obj[char] > 0){
      obj[char]++
    } 
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      obj[char] = 1;
    }
  }

  //if character is something else (space, period, etc.) don't do anything
  // return object at end
  return obj;
}
// console.log(solution('heLlo 안냥하셍.'))

function solution02 (str){
  // make object return at end
  var obj = {};

  for(var char of str){
    var char = char.toLowerCase()
    if(/[a-z0-9]/.test(char)){
      obj[char] = ++obj[char] || 1;
      // if(result[char] > 0){
      //   result[char]++
      // } else {
      //   result[char] = 1;
      // }
    }
  }

  return obj;
}
console.log(solution02('hello 안냥하셍.'))






