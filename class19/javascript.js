
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




// // Creating a Promise
// const myPromise = new Promise((resolve, reject) => {
//     console.log(resolve("Promise resolved!"))
//     console.log(  reject("Promise rejected!"))
   
// });

// //  Using the Promise
// myPromise
//     .then((result) => {
//         console.log(result); // This will run if the promise is resolved
//     })
//     .catch((error) => {
//         console.error(error); // This will run if the promise is rejected
//     })
//     .finally(() => {
//         console.log("Promise finished, regardless of resolution or rejection.");
//     });






     // setTimeout(() => {
    //     // const success = true;
    //     if (success) {
    //         resolve("Promise resolved!");
    //     } else {
    //         reject("Promise rejected!");
    //     }
    // }, 1000);

// const firstFunction = (callback) => {
//     setTimeout(() => {
//         const data = { id: 1, name: "Sample Data" };
//         callback()
//     }, 1000); 
//   };

//   const secondFunction = function (data) {
//     console.log("Fetched data:", data);
//   }
//   firstFunction(secondFunction)





// async function fetchData() {
//     const response = await fetch('https://fakestoreapi.com/products');
//     const data = await response.json();
//     console.log(data);
//   }


//   async function fetchData() {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('An error occurred:', error);
//       throw error; // Re-throw the error if needed
//     }
//   }



// function callback(){
//     console.log("callback function executed");
// }
// setTimeout(callback,2000);
// console.log("waiting for function executed")
// const name1 = () =>{
//     console.log('This is an arrow function')

// }

// setTimeout(name1(),2000)
