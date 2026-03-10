// Checking Array

// check if something is an array

let array = Array.isArray([123]);
let result1 = Array.isArray("a");

console.log(array);
console.log(result1);

// Every

let r = [80,90,85].every(s => s < 70); // true
let s = [80,60,85].every(s => s < 70); // false
console.log(r);
console.log(s);

let y = [80,90,85].some(s => s < 70); // true
let z = [80,60,85].some(s => s < 70); // false
