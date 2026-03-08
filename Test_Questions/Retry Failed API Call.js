const MAX_ATTEMPTS = 5;

let attempt = 0;
let success = false;

do {
  attempt = attempt + 1;   // increase attempt count

  let randomValue = Math.random();  // generate random number

  if (randomValue > 0.6) {
    console.log("Attempt " + attempt + ": SUCCESS (Response 200 OK)");
    success = true;   // stop retrying
  } else {
    console.log("Attempt " + attempt + ": FAILED (Timeout/Error)");
  }

} while (success === false && attempt < MAX_ATTEMPTS);


// Final Result
if (success === true) {
  console.log("API call PASSED after " + attempt + " attempt(s).");
} else {
  console.log("API call FAILED after " + MAX_ATTEMPTS + " attempts.");
}