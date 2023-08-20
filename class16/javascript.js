// // syntax

// const [variable1, variable2, ...restVariables] = array;


// // // Basic Array Destructuring
// const numbers = [1, 2, 3];

// const [first, second, third] = numbers;

// console.log(first);  // 1
// console.log(second); // 2
// console.log(third);  // 3

// // Swapping Values
// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a); // 10
// console.log(b); // 5


// // Using the Rest Operator:
// const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// const [firstColor, secondColor, ...remainingColors] = colors;

// console.log(firstColor);        // red
// console.log(secondColor);       // green
// console.log(remainingColors);   // ['blue', 'yellow', 'orange']





// // syntax

// // const { property1, property2, ...restProperties } = object;



// // Examples of Extracting Values
// const person = { 
//     firstName: 'fatima', 
//     age: 15
//  };

// const { firstName, age } = person;

// console.log(firstName); // fatima
// console.log(age);       // 15

// const book = { 
//     title: 'Harry Potter', 
//     author: 'J. K. Rowling' 
// };

// const { title: bookTitle, author: bookAuthor } = book;

// console.log(bookTitle);   // Harry Potter
// console.log(bookAuthor);  // J. K. Rowling



// const student = { name: 'sana', age: 21, major: 'Computer Science' };

// const { name, ...info } = student;

// console.log(name);      // sana
// console.log(info);      // { age: 21, major: 'Computer Science' }


// // string
// const word = 'Hello';

// const [firstChar, secondChar, ...restChars] = word;

// console.log(firstChar);     // H
// console.log(secondChar);    // e
// console.log(restChars);     // ['l', 'l', 'o']


// // Using Rest Operator
// const sentence = 'JavaScript is amazing!';

// const [firstWord, ...remainingWords] = sentence.split(' ');

// console.log(firstWord);       // JavaScript
// console.log(remainingWords);  // ['is', 'amazing!']



// // Destructuring Unicode Characters

// const emoji = '😃🚀🌟';

// const [smiley, ...star] = emoji;
// console.log(smiley)
// console.log(star)
// document.write(smiley);   // 😃
// document.write(rocket);   // 🚀
// document.write(star);     // 🌟



// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const mergedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
// console.log(mergedArray)


// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const mergedObject = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
// console.log(mergedObject)


export const someVariable = "Hello, world!";

// javascript.js
// import { someVariable  } from './main.js';

// // import sayHello  from './main.js';
// console.log( someVariable)
// console.log(sayHello('fatima'))

// Now you can use someFunction and someVariable here



// function* numberGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
  
//   const generator = numberGenerator();
  
//   console.log(generator.next()); // { value: 1, done: false }
//   console.log(generator.next()); // { value: 2, done: false }
//   console.log(generator.next()); // { value: 3, done: false }
//   console.log(generator.next()); // { value: undefined, done: true }

//   function* generator(i) {
//     yield i;
//     yield i + 10;
//   }
  
//   const gen = generator(10);
  
//   console.log(gen.next().value);
//   // Expected output: 10
  
//   console.log(gen.next().value);
//   // Expected output: 20

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
//     return function(b) {
//       return a + b;
//     };
//   }
  
//   const addTwo = curriedAdd(2);
//   console.log(addTwo(3)); // Output: 5


  //Without currying
// function calculateVolume(length, breadth, height) {
//     return length * breadth * height;
// }
//With Currying
// function calculateVolume(length) {
//     return function (breadth) {
//         return function (height) {
//             return length * breadth * height;
//         }
//     }
// }
// let res = calculateVolume(2)(3)(5)
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
const naturalLog = Math.log(10); // Result: natural logarithm of 10
const exponentValue = Math.exp(2); // Result: e raised to the power of 2

