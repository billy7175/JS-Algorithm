let vals = ["a", "hello", "B", "goodbye"];
console.log(vals);
vals.sort();
console.log(vals);

vals = [
  {
    x: 2,
    y: 10,
  },
  { x: 5,
    y: 6 
  },
];

console.log(vals)
function compare(a,b){
  console.log(b.y - a.y)
  return b.y - a.y;
}
vals.sort(compare)
console.log(vals)

