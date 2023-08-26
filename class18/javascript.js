// // Function Declaration:

// function add(a, b) {
//     return a + b;
// }
// console.log (add (10,23))
// console.log(data)
// const data = 10


// // //   Function Expression:
// console.log(subtract(10,23))
// const subtract = function(a, b) {
//     return a - b;
//   };


// // //   Arrow Function:
// const multiply = (a, b) => a * b;
// console.log(multiply(10,23))


// // Step 1: Placing an order (initiating an asynchronous operation)
// console.log("Ordering a coffee...");

// // // Simulating the time it takes to make the coffee
// setTimeout(() => {
//   // Step 2: Coffee is ready (asynchronous callback)
//   console.log("Coffee is ready!");
// }, 3000); // Simulating a 3-second coffee preparation time

// // // Continue with other tasks while waiting for the coffee
// console.log("Doing other things...");



// console.log("Ordering a coffee...");


// function cookDish(dishName) {
//     // console.log(`Cooking ${dishName}`);
//     setTimeout(() => {
//       console.log(`${dishName} is ready`);
//     }, 1000); // Simulating cooking time
//   }
  
//   cookDish('Pasta');   // Start cooking Pasta
//   cookDish('Salad');   // Start cooking Salad
//   cookDish('Soup');    // Start cooking Soup
  

// console.log("Doing other things...");


// function doSomethingAsync(callback) {
//  console.log(callback())

// }

// function callbackFunction() {
//     let a , b;
//     a = 10
//     b = 20
//    console.log( a + b)
//     // console.log("Callback executed!");
// }

// doSomethingAsync(callbackFunction);





// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   setTimeout(function() {
//     greet("Alice");
//   }, 2000);
  
//   const greet = (name) => {
//     console.log(`Hello, ${name}!`);
//   };
  
//   setTimeout(() => {
//     greet("Bob");
//   }, 1500); 
  