// Number Object in js 

// const num1 = new Number(42);
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


