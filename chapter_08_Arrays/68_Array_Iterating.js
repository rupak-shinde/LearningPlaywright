// Iterate - Go from one to another 

let tests = [ 'login', 'checkout', 'Search'];

// for (let i = 0; i <tests.length; i++){
//     console.log(tests[i]);
// }

//  console.log('----------------')

// for 
//  // for...of(cleanest for values )

//  for (let test of tests) // for values
//  {
//     console.log(test)
//  }

 // forEach (no returns value)
//  tests.forEach((test, index) => {
//         console.log(`${index}:${test}`);
//  });
 
//   console.log('----------------')

  // Entries  Index + Values

// for(let [i, test]of tests.entries()){
//     console.log(i, test);
// }

console.log('----------------')

let students = ['methis','sentil','ajay','rahul'];


// in  for index
for (let student in students)
{
     console.log(student, ' =>', students[student]);
}
 
