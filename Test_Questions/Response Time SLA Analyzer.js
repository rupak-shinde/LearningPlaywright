// Input
let responseTimes = [120, 230, 450, 510, 180, 620];
let SLA_LIMIT = 500;

let index = 0;
let totalRequests = responseTimes.length;

let min = responseTimes[0];
let max = responseTimes[0];
let sum = 0;
let breachCount = 0;

// While loop to analyze response times
while (index < totalRequests) {

    let currentTime = responseTimes[index];

    // Track minimum response time
    if (currentTime < min) {
        min = currentTime;
    }

    // Track maximum response time
    if (currentTime > max) {
        max = currentTime;
    }

    // Add to total for average calculation
    sum = sum + currentTime;

    // Check SLA breach
    if (currentTime > SLA_LIMIT) {
        breachCount = breachCount + 1;
    }

    index++;  // move to next element
}

// Calculate average
let average = sum / totalRequests;

// Calculate breach percentage
let breachPercent = (breachCount / totalRequests) * 100;

// Final Status
let status = (breachCount > 0) 
    ? "❌ SLA VIOLATED" 
    : "✅ SLA MET";

// Print Report
console.log("Total Requests:", totalRequests);
console.log("Min Response:", min + "ms");
console.log("Max Response:", max + "ms");
console.log("Average Response:", average.toFixed(2) + "ms");
console.log("SLA Breaches:", breachCount + " (" + breachPercent.toFixed(2) + "%)");
console.log("Overall Status:", status);