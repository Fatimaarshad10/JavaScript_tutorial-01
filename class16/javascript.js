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


