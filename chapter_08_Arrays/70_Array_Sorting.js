// Sorting

let fruits = [ "Banana", "Apple", "Cherry"];
fruits.sort();
console.log(fruits);

// alphabetical by default

let nums = [10,1,21,2];
nums.sort();
console.log(nums);
nums.sort((a,b)=> a-b);
console.log(nums);

nums.sort((a,b)=> b-a);
console.log(nums);