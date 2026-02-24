if ("hello") console.log("String is Truthy"); // "hello  = truethy"
if(42) console.log("number is Truthy") ;
if({}) console.log(" Empty object is Truthy") ;
if([]) console.log("Empty array is Truthy") ;

// false results
if ("") console.log("Won't print"); // "" -> flasy result
if (null) console.log("won't print");
if (undefined) console.log("won't print");
if (NaN) console.log("won't print");
if(0) console.log("won't print") ;
