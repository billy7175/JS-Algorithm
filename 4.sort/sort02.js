let s= "It was a dark and stormy night";

let words = s.split(/\W+/).filter(word => word.length > 2);
console.log(words)