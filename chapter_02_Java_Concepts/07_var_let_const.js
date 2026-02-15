// var , let , const

// var - Function Scoped

var a = 10; // Global Scope 

console.log(a);

function printHello() {
    console.log("Hello Rupak");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("F -> " + a); // 30

}

// calling of the funtion

printHello();