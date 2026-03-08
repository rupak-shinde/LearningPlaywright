// Input
let envName = "staging";  // change to dev, qa, production, prod

// Fixed values using const
const DEV_URL = "https://dev-api.testingacademy.com";
const STAGING_URL = "https://staging-api.testingacademy.com";
const QA_URL = "https://qa-api.testingacademy.com";
const PROD_URL = "https://api.testingacademy.com";

// Config variables using let
let baseURL = "";
let apiKey = "";
let timeout = 0;
let description = "";

// Switch statement
switch (envName) {

    case "dev":
        baseURL = DEV_URL;
        apiKey = "dev_key_xxxx-xxxx";
        timeout = 5000;
        description = "Development - For internal testing";
        break;

    case "staging":
        baseURL = STAGING_URL;
        apiKey = "stg_key_xxxx-xxxx";
        timeout = 8000;
        description = "Staging - Pre-production mirror";
        break;

    case "qa":
        baseURL = QA_URL;
        apiKey = "qa_key_xxxx-xxxx";
        timeout = 7000;
        description = "QA - Testing environment";
        break;

    case "production":
    case "prod":
        baseURL = PROD_URL;
        apiKey = "prod_key_xxxx-xxxx";
        timeout = 10000;
        description = "Production - Live environment";
        break;

    default:
        console.log("Invalid environment selected.");
}

// Print Config (if valid)
if (baseURL !== "") {
    console.log("Environment:", envName.toUpperCase());
    console.log("Base URL:", baseURL);
    console.log("API Key:", apiKey);
    console.log("Timeout:", timeout + "ms");
    console.log("Description:", description);
}