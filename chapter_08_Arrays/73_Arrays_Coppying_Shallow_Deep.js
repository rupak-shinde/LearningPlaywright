let orignal = [1,2,3];

let copy1 = [...orignal];
console.log(copy1);

let copy2 = orignal.slice();
console.log(copy2);

let copy3 = Array.from(orignal);
console.log(copy3);

let copy4 = orignal.concat();
console.log(copy4);


copy1.push(99);
console.log(orignal);
console.log(copy1);

// Deep copy 
console.log(orignal);
console.log(copy1);
