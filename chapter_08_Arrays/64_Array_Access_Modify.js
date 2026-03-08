//Accessing & Modifying
let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);  //
console.log(statuses[1]);

console.log(statuses.at(-1)); // last elements
console.log(statuses.at(-2));   
console.log(statuses.at(-3));   
console.log(statuses.at(-4));     

// modify

statuses[1] = "Bloccked";
console.log(statuses);

// lenght

console.log(statuses.length);

