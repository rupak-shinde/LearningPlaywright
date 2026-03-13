// Rest Parameters  
function logResults(SuiteName, ...results){
    console.log(`Suite: ${SuiteName}`);
    console.log(`Results: ${results.join(", ")  }`);
}

logResults("Auth Suite", "Pass", "Fail", "Pass", "Skip");

// Suite: Auth Suite
// Results: Pass, Fail, Pass, Skip  

function add(a, b, c){
    return a + b + c;
}
