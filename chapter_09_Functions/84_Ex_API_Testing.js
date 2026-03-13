// If (ourstatuscode >= 200 && ourstatuscode < 300) then it is successfull else it is failure

function validateStatusCode(status ) {
    if(status >= 200 && status<= 300) {
        console.log("Request is fine 1");
    }
}

const validateStatusCode_Exp = function (status) {
    if(status >= 200 && status<= 300) {
        console.log("Request is fine 2");
    }
}

const validateStatusCode_Arrow = (status) => {
    if(status >= 200 && status<= 300) {
        console.log("Request is fine 3");
    }
}

validateStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);