let score = 85;
let result = score >= 70 ? "Pass" : "Fail";
console.log(result);

let score2 = 45;
let result2 = score2 >= 70 ? "Pass" : "Fail";
console.log(result2);

function getResult(score) {
    return score >= 70 ? "Pass" : "Fail";
}

console.log(getResult(85)); 
console.log(getResult(45));  