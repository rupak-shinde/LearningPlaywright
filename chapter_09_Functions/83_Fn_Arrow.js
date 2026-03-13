// Arrow function (ES6)

const greet = function(name) {
    return `Hello, ${name}`;
}

// Arrow function name(params) => expression
const greet1 = (name2) => `Hello, ${name2}`;

console.log(greet("Alice"));   
console.log(greet1("Alice"));   

// no param req
const getEnv = () => {
    console.log(getEnv());
}

// Arrow Funtionn generay works whenever you have a single line.

const double1 = n =>n * 2;
console.log(double1(5));    

// Suppose we have to return multiple values from a function

const getresult = (score) => {
    if(score >= 70) return "Pass";
    return "fail";
};