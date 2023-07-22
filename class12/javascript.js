// function Country(name) {
//     this.name = name;
// }

// // Adding a property to the prototype using 'prototype' keyword
// Country.prototype.language = 'urdu';

// const country_one = new Country('pakistan');
// const country_two = new Country('india');

// // Adding an instance-specific property directly to 'country_one'
// country_one.religious = 'no';

// console.log(country_one.language ); 
// console.log(country_two.language ); 

// console.log(country_one.religious); 
// console.log(country_two.religious); 


// Number Object in js 

// const num1 = new Number(42);
// console.log(num1)
// const num2 = 123; 
// console.log(typeof num1)
// console.log(typeof num2)

// // properties 
// console.log(Number.MAX_VALUE); 
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN); 
// console.log(Number.POSITIVE_INFINITY); 
// console.log(Number.NEGATIVE_INFINITY); 
// methods 
// const largeNumber = 1234567890;
// const smallNumber = 0.00001234;

// console.log(largeNumber.toExponential()); 
// console.log(smallNumber.toExponential(2)); 

// const number = 1234567.89;
// console.log(number.toLocaleString()); 
// const pi = 3.14159265359;
// console.log(pi.toFixed(4)); 
// console.log(pi.toPrecision(4));
// console.log(pi.valueOf())
// console.log(pi.toString(2)); 

// const numObject = new Number(42);
// console.log(numObject.valueOf()); 


// const booleanObj = new Boolean(true);
// console.log(booleanObj); 
// console.log(booleanObj.valueOf())
// console.log(booleanObj.toString()); 
// console.log(booleanObj.constructor === Boolean); 


// const stringObj = new String("Hello, world!");
// console.log(stringObj)


// const primitiveString = "Hellod, world!";
// console.log(primitiveString.lengthd); 
// console.log(primitiveString.charAt(6)); 
// console.log(primitiveString.charCodeAt(2)); 
// console.log(primitiveString.concat('nono')); 
// console.log(primitiveString.indexOf("d")); 
// console.log(primitiveString.lastIndexOf('d')); 
// console.log(primitiveString.match('Hello')); 
// console.log(primitiveString.replace('Hello', 'No')); 
// console.log(primitiveString.search('Hello')); 
// console.log(primitiveString.slice(1,4))
// console.log(primitiveString.split(" ", 2))

// var str = "Apples are round, and apples are juicy.";
// if (str.toLowerCase().search('apples') == -1) {
//   document.write("Does not contain Apples");
// } else {
//   document.write("Contains Apples");
// }

// var sliced = str.slice(3, -2)
// document.write( sliced );


// var str1 = new String( "This is string one and again string" );
// var index = str1.lastIndexOf( "to" );
// document.write("lastIndexOf found String :" + index ); 
// document.write("<br />");
// var index = str1.lastIndexOf( "one" );
// document.write("lastIndexOf found String :" + index );





// console.log(primitiveString.toUpperCase()); 
// console.log(primitiveString.constructor); 

// Using a String object unnecessarily
// const stringObj = new String("Hello");
// console.log(stringObj)
// const resultObj = stringObj + " World";
// console.log(resultObj); 


// // Using primitive string directly
// const primitiveString = "Hello";
// const resultPrimitive = primitiveString + " World";
// console.log(resultPrimitive); // Output: "Hello World"



// Constructor function for person objects
// function person (name , age , dob) {
//   this.name = name;
//   this.age = age;
//   this.dob = dob;
// }

// var first_person = new person("Eman", 25 , '12-05-2000');
// var second_person = new person("alisha", 30, '04-02-2001');
// var third_person = new person("amna", 18 , '10-07-2003');


// // Function to generate table rows from Person objects
// function generateTableRows() {
//   const tableBody = document.querySelector("#personTable tbody");

//   const row1 = `
//     <tr>
//       <td>${first_person.name}</td>
//       <td>${first_person.age}</td>
//       <td>${first_person.dob}</td>
//     </tr>
//   `;

//   const row2 = `
//     <tr>
//       <td>${second_person.name}</td>
//       <td>${second_person.age}</td>
//       <td>${second_person.dob}</td>
//     </tr>
//   `;

//   const row3 = `
//     <tr>
//       <td>${third_person.name}</td>
//       <td>${third_person.age}</td>
//       <td>${third_person.dob}</td>
//     </tr>
//   `;

//   tableBody.innerHTML = row1 + row2 + row3;
// }

// // // Invoke the function to generate table rows
// generateTableRows();

// Example 

// const person = {
//   name: "nimra",
//   age: 30,
//   gender: "female",
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old.`);
//   }
// };

// console.log(person.name); 
// console.log(person.age); 

// person.greet();


