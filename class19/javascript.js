
// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   setTimeout(function() {
//     greet("Noor");
//   }, 2000);



//   const greet = (name) => {
//     console.log(`Hello, ${name}!`);
//   };
  
//   setTimeout(() => {
//     greet("Bob");
//   }, 1500); 
  

// const oneHourInMilliseconds = 60 * 60 * 1000; // 60 minutes * 60 seconds * 1000 milliseconds

// setTimeout(() => {
//   console.log("Action after 1 hour");
// }, oneHourInMilliseconds);


// callback
// function firstFunction(a, b) {
//   console.log( a + b)
// }
//  function secondFunction (firstFunction){
//    firstFunction(10,20)
//  }
// secondFunction(firstFunction)




// firstFunction(10 , 20)

// doSomethingAsync(callbackFunction);


// setTimeout(function, delay, arg1, arg2, ...);


// Here's a simplified example of how the event loop works with setTimeout:

// console.log('Start');

// setTimeout(() => {
//   console.log('Inside setTimeout callback');
// }, 1000);

// console.log('End');



// const questions = [
//     "What is JavaScript?",
//     "How does a callback work?",
//     "What are Promises?"
// ];


// // Simulating an API call with a callback
// function fetchAnswer(question, callback) {
//     setTimeout(function() {
//         const answer = "Answer to '" + question + "'";
//         callback(answer);
//     }, 1000);
// }

// function handleAnswer(answer) {
//     console.log("Answer:", answer);
// }

// questions.forEach(function(question) {
//     fetchAnswer(question, handleAnswer);
// });

// console.log("Fetching answers...");
// setTimeout(() => {
    
// }, );



