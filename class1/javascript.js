// const x = 5 
// // console.log(x)
// document.write(x)
// //  let x = 6
// console.log(x)
// let name ;
// name = 'maham'
// console.log(name)

// const _myVar = 3.14 
// console.log(_myVar)

// var y = 5;
// let age = 25;
// const URL = "https://example.com"

// global Scope
// var global = 'Global Scope'
// function myFunction (){
//     console.log(global)
// }
// console.log(global)
// myFunction()

// local Scope
// function myFunction (){
// let value = 2
//    console.log(value)
// }
// myFunction(); // Call the function to see the output

//  Uncaught ReferenceError: local is not defined
// console.log(local)


// Example 1 : 
// var a = 10 
// var b = 20
// console.log(a)
// var a = 30
// console.log(a)

// Example 2 : 
// let a = 20
// let b = 30
// console.log(a)
// let a = 20  Cannot redeclare block-scoped variable 'a'.

//  Example 3 :
// const a = 10
// const b = 20
// console.log(a)
// const a = 20 Cannot redeclare block-scoped variable 'a'.

// Operators 
// Arithmetic Operators
// let x = 5;
// let y = 2;
// // Addition
// let sum = x + y; // Result: 7
// // Subtraction
// let difference = x - y; // Result: 3
// document.write(sum)

// // Multiplication
// let product = x * y; // Result: 10

// // Division
// let quotient = x / y; // Result: 2.5

// // Remainder (Modulus)
// let remainder = x % y; // Result: 1

// // Increment
// let increment = ++x; // Result: 6

// // Decrement
// let decrement = --y; // Result: 1

// Comparison Operators:
// let x = 5;
// let y = 10;

// // Equal to
// console.log(x == y); // Result: false

// // Not equal to
// console.log(x != y); // Result: true

// // Greater than
// console.log(x > y); // Result: false

// // Less than
// console.log(x < y); // Result: true

// // Greater than or equal to
// console.log(x >= y); // Result: false

// // Less than or equal to
// console.log(x <= y); // Result: true

// Logical Operators
// let x = 5;
// let y = 10;

// // AND operator
// console.log(x > 0 && y < 20); // Result: true

// // OR operator
// console.log(x > 0 || y > 20); // Result: true

// // NOT operator
// console.log(!(x > 0)); // Result: false
// ternary Operator 
// let age = 25;

// // Ternary operator
// let message = age >= 18 ? "Adult" : "Minor";
// console.log(message); // Result: "Adult"

// let x = 5; // Binary: 0101
// let y = 3; // Binary: 0011

// // Bitwise AND
// let resultAND = x & y; // Result: 1 (Binary: 0001)

// // Bitwise OR
// let resultOR = x | y; // Result: 7 (Binary: 0111)

// // Bitwise XOR
// let resultXOR = x ^ y; // Result: 6 (Binary: 0110)

// // Bitwise left shift
// let resultLeftShift = x << 1; // Result: 10 (Binary: 1010)

// // Bitwise right shift
// let resultRightShift = x >> 1; // Result: 2 (Binary: 0010)
// let number = 10;
// let binary = number.toString(2);
// console.log(binary); // Output: "1010"

// Assignment Operator 
// let x = 5;

// // Simple assignment
// let y = x;
// console.log(y); // Output: 5

// // Addition assignment
// x += 3; // Equivalent to x = x + 3
// console.log(x); // Output: 8

// // Subtraction assignment
// x -= 2; // Equivalent to x = x - 2
// console.log(x); // Output: 6

// // Multiplication assignment
// x *= 4; // Equivalent to x = x * 4
// console.log(x); // Output: 24

// // Division assignment
// x /= 3; // Equivalent to x = x / 3
// console.log(x); // Output: 8

// // Modulus assignment
// x %= 5; // Equivalent to x = x % 5
// console.log(x); // Output: 3
// document.write(linebreak);


// typeof
// let x = 10;
// console.log(typeof x); // Output: "number"

// let y = "Hello";
// console.log(typeof y); // Output: "string"

// let z = true;
// console.log(typeof z); // Output: "boolean"

// let arr = [1, 2, 3];
// console.log(typeof arr); // Output: "object"

// let obj = { name: "John", age: 25 };
// console.log(typeof obj); // Output: "object"

// let func = function() { };
// console.log(typeof func); // Output: "function"

// let n = null;
// console.log(typeof n); // Output: "object"

// let u = undefined;
// console.log(typeof u); // Output: "undefined"

// Condition if else
// let age = 18;

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }
// if else if 
// var book = "maths";
// if( book == "history" ){
//  document.write("<b>History Book</b>");
// }else if( book == "maths" ){
//  document.write("<b>Maths Book</b>");
// }else if( book == "economics" ){
//  document.write("<b>Economics Book</b>");
// }else{
//  document.write("<b>Unknown Book</b>");
// }
// while loop
// let count = 0;

// while (count < 5) {
//   console.log("Count: " + count);
//   count++;
// }
// do while loop 
// let i = 0;

// do {
//   console.log("Current value of i: " + i);
//   i++;
// } while (i < 5);
// for loop
// for (let i = 0; i < 5; i++) {
//     console.log("Value of i: " + i);
//   }

// function myFunction (){
//     let a = 20
//     console.log(a)
// }
// myFunction()
// console.log(a)