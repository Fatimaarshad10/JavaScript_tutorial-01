
// function* numberGenerator() {
//     yield 1;
   
//   }
  
//   const generator = numberGenerator();
  
//   console.log(generator.next()); // { value: 1, done: false }
//   console.log(generator.next()); // { value: 2, done: false }
//   console.log(generator.next()); // { value: 3, done: false }
//   console.log(generator.next()); // { value: undefined, done: true }

  // function* generator(i) {
  //   yield i;
  //   yield i + 10;
  // }
  
  // const gen = generator(10);
  
  // console.log(gen.next().value);
  // // Expected output: 10
  
  // console.log(gen.next().value);
  // Expected output: 20

// function* idMaker() {
//     let index = 0;
//     while (true) {
//       yield index++;
//     }
//   }
  
//   const gen = idMaker();
  
//   console.log(gen.next().value); // 0
//   console.log(gen.next().value); // 1
//   console.log(gen.next().value); // 2
//   console.log(gen.next().value); // 3
  




// Regular function that takes two arguments
// function add(a, b) {
//     return a + b;
//   }
  
//   console.log(add(2, 3)); // Output: 5


// Curried version of the add function
// function curriedAdd(a) {
//     return function (b) {
//       return function (c){
//         return a + b + c;

//       }
//     };
//   }
  
//   const addTwo = curriedAdd(2);
//   console.log(addTwo(3)(4))
//   console.log(addTwo(3)); // Output: 5
// console.log(addTwo(5))


  //Without currying
// function calculateVolume(length, breadth, height) {
//     return length * breadth * height;
// }
// With Currying
// function calculateVolume(length) {
//     return function (breadth) {
//         return function (height) {
//             return length * breadth * height;
//         }
//     }
// }
// let res = calculateVolume(4)(6)(4)
// console.log(res)


//  const userObj = {
//     name : "fatima",
//     age : 23
// }
// console.log(userObj["age"]); 
// function userInfo(Obj){
//     console.log(Obj)
//     return function (userinfo){
//         console.log(userinfo)
//         return Obj[userinfo]
// }
// }
// let res = userInfo(userObj)
// console.log(res('name'))



// Getting the absolute value
const absValue = Math.abs(-5); // Result: 5
// Rounding numbers
const roundedUp = Math.ceil(4.3); // Result: 5
const roundedDown = Math.floor(4.8); // Result: 4
const rounded = Math.round(4.5); // Result: 5

// Finding maximum and minimum values
const maxValue = Math.max(10, 20, 5); // Result: 20
const minValue = Math.min(10, 20, 5); // Result: 5

// Generating a random number between 0 and 1
const randomNum = Math.random(); // Result: a random number between 0 and 1

// Generating a random integer between a range
const randomInteger = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // Result: a random integer between 1 and 10

// Calculating square root and exponentiation
const squareRoot = Math.sqrt(25); // Result: 5
const exponentiation = Math.pow(2, 3); // Result: 8

// Trigonometric functions
const sineValue = Math.sin(Math.PI / 2); // Result: 1 (sine of 90 degrees)
const cosineValue = Math.cos(Math.PI); // Result: -1 (cosine of 180 degrees)
const tangentValue = Math.tan(0); // Result: 0 (tangent of 0 degrees)

// Mathematical constants
const piValue = Math.PI; // Result: 3.141592653589793
const eValue = Math.E; // Result: 2.718281828459045

// Calculating logarithm and exponent
// const naturalLog = Math.log(10); // Result: natural logarithm of 10
// const exponentValue = Math.exp(2); // Result: e raised to the power of 2



import sayHello from './data.js'
console.log(sayHello('fatima'))



// Variable Hoisting:

// console.log(myVariable); // Outputs: undefined
// var myVariable = 42;
// console.log(myVariable); // Outputs: 42


// Function Hoisting:
myFunction(); // Outputs: "Hello, world!"

function myFunction() {
    console.log("Hello, world!");
}

// // Function Expressions and Variables:
 // Throws an error: myFunction is not a function
// var myFunction = function() {
//     console.log("Hello, world!");
// };

// myFunction();
