// Input values (change these to test different cases)
let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let status = "";
let action = "";

// Check element state
if (isPresent === false) {
    status = "NOT FOUND";
} 
else if (isPresent === true && isDisplayed === false) {
    status = "HIDDEN";
} 
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    status = "DISABLED";
} 
else if (isPresent === true && isDisplayed === true && isEnabled === true) {
    status = "READY";
}

// Severity using ternary operator
let severity = (isPresent === false) 
    ? "CRITICAL"
    : (isDisplayed === false || isEnabled === false) 
        ? "WARNING"
        : "OK";

// Suggested Action
if (status === "NOT FOUND") {
    action = "Element not found in DOM. Check locator or page load.";
}
else if (status === "HIDDEN") {
    action = "Element is hidden. Wait for it to become visible.";
}
else if (status === "DISABLED") {
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
}
else if (status === "READY") {
    action = "Element is ready. Safe to interact.";
}

// Print result
console.log("Status:", status);
console.log("Severity:", severity);
console.log("Action:", action);