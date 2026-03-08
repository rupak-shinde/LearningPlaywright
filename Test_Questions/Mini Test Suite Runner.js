// const → fixed test data
const testCases = [
  { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
  { name: "User count matches", actual: "5", expected: 5, type: "looseEqual" },
  { name: "Response is object", actual: { id: 1 }, expected: "object", type: "typeCheck" },
  { name: "Token exists", actual: "abc123", expected: true, type: "truthy" },
  { name: "Load time < 500ms", actual: 650, expected: 500, type: "lessThan" }
];

// var → global counters
var passCount = 0;
var failCount = 0;
var errorCount = 0;

let results = []; // store results

// FOR LOOP → execute all tests
for (let i = 0; i < testCases.length; i++) {

  let tc = testCases[i];
  let status = "";
  let message = "";

  try {

    switch (tc.type) {

      case "strictEqual":
        status = (tc.actual === tc.expected) ? "PASS" : "FAIL";
        message = tc.actual + " === " + tc.expected;
        break;

      case "looseEqual":
        status = (tc.actual == tc.expected) ? "PASS" : "FAIL";
        message = tc.actual + " == " + tc.expected;
        break;

      case "typeCheck":
        status = (typeof tc.actual === tc.expected) ? "PASS" : "FAIL";
        message = "typeof " + typeof tc.actual;
        break;

      case "truthy":
        status = (tc.actual ? true : false) ? "PASS" : "FAIL";
        message = "Value is truthy";
        break;

      case "lessThan":
        status = (tc.actual < tc.expected) ? "PASS" : "FAIL";
        message = tc.actual + " < " + tc.expected;
        break;

      default:
        status = "ERROR";
        message = "Invalid comparison type";
    }

  } catch (e) {
    status = "ERROR";
    message = "Exception occurred";
  }

  // Count results
  if (status === "PASS") {
    passCount++;
  } else if (status === "FAIL") {
    failCount++;
  } else {
    errorCount++;
  }

  results.push(status);

  console.log(
    (status === "PASS" ? "✅" : status === "FAIL" ? "❌" : "⚠️") +
    " TC-0" + (i + 1) + ": " + tc.name +
    " → " + status + " (" + message + ")"
  );
}

// WHILE LOOP → find consecutive passes from start
let consecutivePass = 0;
let index = 0;

while (results[index] === "PASS") {
  consecutivePass++;
  index++;
}

// DO...WHILE → find first failure
let firstFailIndex = -1;
let j = 0;

do {
  if (results[j] === "FAIL") {
    firstFailIndex = j;
    break;
  }
  j++;
} while (j < results.length);

// Final Report
let total = testCases.length;
let passRate = ((passCount / total) * 100).toFixed(2);
let overall = (failCount === 0 && errorCount === 0) ? "✅ PASSED" : "❌ FAILED";

console.log("\n------ TEST SUMMARY ------");
console.log("Total:", total);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Errors:", errorCount);
console.log("Pass Rate:", passRate + "%");
console.log("Consecutive Passes from Start:", consecutivePass);
console.log("First Failure At:", firstFailIndex !== -1 ? "TC-0" + (firstFailIndex + 1) : "None");
console.log("Overall:", overall);