// Return a value

function getStatus(code){
    if(code >= 200 && code <= 300) return "Success";
    if(code >= 400 && code <= 500) return "Client Error";
    if(code >= 500) return "Server Error";
}

console.log(getStatus(200));

function logTest(name){
    console.log(`Running: ${name}`);
    // no return statement
}
let result = logTest("Login");
console.log(result);    

greet("Alice");

function greet(name){
    console.log(`Hello ${name}`);
}   

sayHi("Bob");

const sayHi = function(name){
    console.log(`Hi ${name}`);
}
