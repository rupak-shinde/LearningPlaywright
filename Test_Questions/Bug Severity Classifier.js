// Input values
let bugTitle = "Checkout page crashes on applying coupon";
let frequency = "always";   // always, often, rarely
let impact = "blocker";     // blocker, major, minor

let severity = "";
let message = "";

// Nested if-else logic
if (frequency === "always") {

    if (impact === "blocker") {
        severity = "P0";
        message = "Critical: Stop release immediately";
    } 
    else if (impact === "major") {
        severity = "P1";
        message = "High: Fix before release";
    } 
    else if (impact === "minor") {
        severity = "P2";
        message = "Medium: Fix soon";
    }

} 
else if (frequency === "often") {

    if (impact === "blocker") {
        severity = "P1";
        message = "High: Needs urgent fix";
    } 
    else if (impact === "major") {
        severity = "P2";
        message = "Medium: Fix in next build";
    } 
    else if (impact === "minor") {
        severity = "P3";
        message = "Low: Can be scheduled";
    }

} 
else if (frequency === "rarely") {

    if (impact === "blocker") {
        severity = "P2";
        message = "Medium: Investigate soon";
    } 
    else if (impact === "major") {
        severity = "P3";
        message = "Low: Monitor and fix later";
    } 
    else if (impact === "minor") {
        severity = "P4";
        message = "Very Low: Cosmetic issue";
    }

}

// Print result
console.log("Bug Title:", bugTitle);
console.log("Frequency:", frequency);
console.log("Impact:", impact);
console.log("Severity:", severity + " - " + message);