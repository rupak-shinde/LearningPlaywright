// // Searching

// let results = ['Pass', 'Fail', 'Pass', 'Error', 'Fail'];

// // Index - Returns first index or -1 if not found
// console.log(results.indexOf('Fail'));
// console.log(results.indexOf('Skip'));

// // last index of - Searches from the end 
// console.log(results.lastIndexOf('Fail'));

// // // includes - retuns boolean 

// console.log(results.includes('Error'));  //true
// console.log(results.includes('Skip')); // false

// results.includes('Error'); //


// Find - returns first searching element

let nums = [10, 25, 30, 45];

console.log(nums.find(x => x > 20));

console.log(nums.findLast(n => n > 20));
console.log(nums.findLastIndex(n => n > 20));

