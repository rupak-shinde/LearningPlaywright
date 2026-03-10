// slicing & Combining

// let arr = [1,2,3,4,5];

// console.log(arr.slice(1,3));

// console.log(arr.slice(2,4));

// console.log(arr.slice(-2));
// console.log(arr.slice(-3));

// console.log(arr.slice(0));
// console.log(arr.slice(-5));


// let srr1 = [ 1,2,3,4,5];

let a = [1,2];
let b = [3,4];
// let c = a.concat(b,[5,6]);
let c = a.concat(b);
console.log(c);

// spread ( modern way)

let d = [ ...a,...b];
console.log(d);

// ..., ===
// Join
let s = ["pass","fail","skip"].join(" | ");
console.log(s);

