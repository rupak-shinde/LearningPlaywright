let score = [45, 82, 91, 60, 73];

// Map - Transform Every Elemets , Rertuns New Array

let grades = score.map(s => s > 70? 'Pass': 'Fail');
console.log(grades);

// filter keeps values that passes the test

let passing = score.filter(s => s >= 70);
console.log(passing);

//Reduce - Acknowlege to single value
let total = score.reduce((sum, s) => sum + s, 0 ); // 351
console.log(total);

// flat  - flattes nested arrays
let nested = [[1],[2],[3],[4],[5]];
console.log(nested.flat());