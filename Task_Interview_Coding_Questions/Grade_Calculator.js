//Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

let grade;
let score = 75;

if(typeof score !== 'number'){
    console.log("score should be in numbers only");
    return;
}

if(score < 0 || score > 100){
    console.log("score should be in between 0 and 100");
    return;
}
else if(score >=90){
    grade = 'A';
}else if(score >=80){
    grade = 'B';
}else if(score >=70){                 
    grade = 'C';
}else if(score >=60){
    grade = 'D';
}else {
    grade = 'F';
}

//console.log("For the score " + score + " Grade is " + grade);
console.log(`For the score ${score} Grade is ${grade}`);
