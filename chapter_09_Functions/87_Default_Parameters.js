function retry(testName, maxRetries = 3, delay = 1000){
    console.log(`Retrying    ${testName} upto ${maxRetries} times  ${delay} as apart`);
}

retry("login");
retry("Checkout", 5);
retry("API Test", 5, 500);
