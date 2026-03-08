// Global counter using var
var totalUsers = 8;   // change this number to generate more users

// Fixed values using const
const domain = "testingacademy.com";
const roles = ["admin", "editor", "viewer", "tester", "manager"];

// Generate users using for loop
for (let i = 1; i <= totalUsers; i++) {

    // Create padded ID (USR-0001 format)
    let paddedNumber = String(i).padStart(4, "0");
    let userId = "USR-" + paddedNumber;

    // Create name & email
    let name = "TestUser_" + i;
    let email = "testuser" + i + "@" + domain;

    // Cycle roles using modulus
    let role = roles[(i - 1) % roles.length];

    // Every 3rd user inactive
    let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

    // Print user data
    console.log(userId + " | " + name + " | " + email + " | " + role + " | " + status);
}