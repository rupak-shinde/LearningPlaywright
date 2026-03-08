let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;

// Count results using for loop
for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passed++;
    } else if (testResults[i] === "fail") {
        failed++;
    } else if (testResults[i] === "skip") {
        skipped++;
    }
}

let totalTests = testResults.length;
let passRate = (passed / totalTests) * 100;

// Decide verdict
let verdict = "";

if (failed === 0) {
    verdict = "All tests passed. Ready for release.";
} else if (failed <= 2) {
    verdict = "Minor failures. Review before release.";
} else {
    verdict = "Too many failures. Block release.";
}

// Print Report
console.log("Total Tests :", totalTests);
console.log("Passed :", passed);
console.log("Failed :", failed);
console.log("Skipped :", skipped);
console.log("Pass Rate :", passRate.toFixed(2) + "%");
console.log("VERDICT :", verdict);