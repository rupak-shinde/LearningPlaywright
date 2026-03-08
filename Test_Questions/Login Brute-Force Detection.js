// const → fixed credentials and threshold
const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_STRIKES = 3;

// var → global strike counter
var strikeCount = 0;

// Login attempts array (simulate password attempts)
let attempts = ["wrong", "wrong", "wrong", "correct"];

// let → loop variable
let index = 0;
let isLocked = false;

do {

    // If already locked, reject all further attempts
    if (isLocked === true) {
        console.log("Attempt " + (index + 1) + ": 🔒 ACCOUNT LOCKED - Rejected");
        index++;
        continue;
    }

    // Simulate entered credentials
    let enteredEmail = VALID_EMAIL;  // assuming email is correct
    let enteredPassword = (attempts[index] === "correct") 
        ? VALID_PASSWORD 
        : "WrongPass";

    // Validate using strict equality and logical AND
    if (enteredEmail === VALID_EMAIL && enteredPassword === VALID_PASSWORD) {
        console.log("Attempt " + (index + 1) + ": ✅ LOGIN SUCCESS");
        break;  // stop loop after success
    } 
    else {
        strikeCount++;
        console.log("Attempt " + (index + 1) + 
            ": ❌ FAILED - Strike " + strikeCount + "/" + MAX_STRIKES);

        // Lock account after 3 consecutive failures
        if (strikeCount === MAX_STRIKES) {
            isLocked = true;
            console.log("🚨 ACCOUNT LOCKED");
        }
    }

    index++;

} while (index < attempts.length);