// const questions = [
//     "What is JavaScript?",
//     "How does a callback work?",
//     "What are Promises?"
// ];


// // Simulating an API call with a callback
// function fetchAnswer(question, callback) {
//     // Simulating an API response delay
//     setTimeout(function() {
//         const answer = "Answer to '" + question + "'";
//         callback(answer);
//     }, 1000);
// }

// // Callback function to handle the answer
// function handleAnswer(answer) {
//     console.log("Answer:", answer);
// }

// // Fetch answers for each question using callbacks
// questions.forEach(function(question) {
//     fetchAnswer(question, handleAnswer);
// });

// console.log("Fetching answers...");

// // Creating a Promise
// const myPromise = new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve("Promise resolved!");
//         } else {
//             reject("Promise rejected!");
//         }
//     }, 1000);
// });

// // Using the Promise
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