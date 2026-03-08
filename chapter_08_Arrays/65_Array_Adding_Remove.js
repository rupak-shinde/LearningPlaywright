let arr = [ 1,2,3]

// Add to end
console.log(arr)
arr.push(4); // add at the end
console.log(arr);
arr.pop(4);
console.log(arr);

arr.push(5,6); // add mul at the end
console.log(arr);

// add to beganing
arr.unshift(0); // add at start
console.log(arr);

arr.shift(); // rempve from start
console.log(arr);

arr.splice(2,1);
console.log(arr);

arr.splice(2,0,99);
console.log(arr);

arr.splice(1,2,10,20);
console.log(arr);

