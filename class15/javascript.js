// // -------------> indexOf() method 

//   // array.indexOf(searchElement, fromIndex);

// const fruits = ['apple', 'banana', 'orange', 'apple'];

// // const indexOfApple = fruits.indexOf('apple');
// // console.log(indexOfApple); // Outputs: 0
// // const indexOfApple2 = fruits.indexOf('apple', 1);
// // console.log(indexOfApple2); // Outputs: 3 (starting from index 1)



// // // -------------> join() method 
// // // array.join(separator);
// const commaSeparated = fruits.join();
// console.log(commaSeparated); // Outputs: 'apple,banana,orange'
// // const numbers = [1, 2, 3, 4, 5];
// const joinedNumbers = fruits.join(' () ');
// console.log(joinedNumbers); 



// const lastIndex = fruits.lastIndexOf('apple');
// // console.log(lastIndex); // Outputs: 3 (last occurrence of 'apple')
// const notFoundIndex = fruits.lastIndexOf('grape');
// // console.log(notFoundIndex); // Outputs: -1 (not found)
// const lastIndexFrom2 = fruits.lastIndexOf('apple', 2);
// // console.log(lastIndexFrom2);
// // backward move 





// // -------------> map() method 
// const numbers5= [1, 2, 3, 4, 5];
// const doubledNumbers = numbers5.map(function(number) {
//   return number * 2;
// });
// console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]



// // // -------------> pop() method 
// const fruits7 = ['apple', 'banana', 'orange'];
// const removedFruit = fruits7.pop();
// // console.log(removedFruit); // Outputs: 'orange'
// console.log(fruits7); // Outputs: ['apple', 'banana']


// // // -------------> push() method 
// const newLength = fruits7.push('orange', 'grape');
// console.log(fruits7); 



// // // -------------> reverse() method 
// const numbers7 = [1, 2, 3, 4, 5];

// numbers7.reverse();
// // console.log(numbers7); // Outputs: [5, 4, 3, 2, 1]


// // // -------------> shift() method 

// const fruits8 = ['apple', 'banana', 'orange'];
// const removedFruit8 = fruits8.shift();
// // console.log(removedFruit8); // Outputs: 'apple'
// // console.log(fruits8); // Outputs: ['banana', 'orange']


// // // -------------> slice() method 

// const newArray = array.slice(startIndex, endIndex);
// const numbers10 = [1, 2, 3, 4, 5];
// const slicedNumbers = numbers10.slice(1, 4);
// // console.log(slicedNumbers); // Outputs: [2, 3, 4]


// // // -------------> sort() method 

// const numbers12 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// numbers12.sort();
// console.log(numbers12); // Outputs: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]



// // -------------> splice() method 

// const removedElements = array.splice(startIndex, deleteCount, ...itemsToAdd);
// const colors4 = ['red', 'green', 'blue', 'yellow', 'orange'];
// const removedElements = colors4.splice(2, 2, 'purple', 'pink');
// // console.log(removedElements); // Outputs: ['blue', 'yellow']
// console.log(colors4); // Outputs: ['red', 'green', 'purple', 'pink', 'orange']



// // -------------> toString() method 

const fruits20 = ['apple', 'banana', 'orange'];
// const fruitsAsString = fruits20.toString('shdhhc');
// console.log(fruitsAsString); // Outputs: 'apple,banana,orange'




const length = fruits20.unshift( 'grape');
console.log(length); 
console.log(fruits20); 


// // -------------> reduce() method 

const numbers30 = [1, 2, 3, 4, 5];
const sum = numbers30.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sum); // Outputs: 15 (1 + 2 + 3 + 4 + 5)



// // -------------> reduceRight() method 

// const numbers40 = [1, 2, 3, 4, 5];

// const reversedSum = numbers40.reduceRight(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// // console.log(reversedSum); // Outputs: 15 (5 + 4 + 3 + 2 + 1)




const currentDate = new Date();
console.log(Date.prototype)

// const specificDate = new Date(2023, 7, 13, 15, 30, 0); 
// console.log(specificDate)



// const year = currentDate.getFullYear();
// console.log(year)

// const month = currentDate.getMonth(); 
// console.log(month)

// const day = currentDate.getDate();
// console.log(day)

// const hours = currentDate.getHours();
// console.log(hours)

// const minutes = currentDate.getMinutes();
// console.log(minutes)


// const seconds = currentDate.getSeconds();
// console.log(seconds)

// const dayOfWeek = currentDate.getDay(); 
// console.log(dayOfWeek) //sunday start with 0


// const formattedDate = currentDate.toLocaleDateString();   // E.g., "8/13/2023"
// console.log(formattedDate)

// const formattedTime = currentDate.toLocaleTimeString();   // E.g., "3:30:15 PM"
// console.log(formattedTime)

// const formattedDateTime = currentDate.toLocaleString();   // E.g., "8/13/2023, 3:30:15 PM"
// console.log(formattedDateTime)


// const today = new Date();
// const tomorrow = new Date(today);
// tomorrow.setDate(today.getDate() + 1);

// const timeDifference = tomorrow - today; // Time difference in milliseconds
// // console.log(timeDifference)



// // // Creating an object to be stored as JSON
const userData = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};

// // // Convert the object to JSON format
const jsonData = JSON.stringify(userData);

// // // Store the JSON data in Local Storage with the key "user"
localStorage.setItem("user", jsonData);


// // // Retrieve the JSON data from Local Storage
const storedData = localStorage.getItem("user");
console.log(storedData)

if (storedData) {
//     Parse the JSON data back to a JavaScript object
    const parsedData = JSON.parse(storedData);
console.log(parsedData)
    // console.log(parsedData.name); // Output: "John Doe"
    // console.log(parsedData.age);  // Output: 30
    // console.log(parsedData.email); // Output: "john@example.com"
} else {
    console.log("No user data found.");
}
