// -------------> Understanding Arrays in JavaScript <---------

// console.log()
// const check = new Array(1,2,3,4) // Array constructor 
// console.log(check)


const array = [] // declare 

const number = [1,2,3,4,5] //initialize value
console.log(number[0])

const student = [20, 'fatima' , true]

// console.log(student)

// ---------> Apply Arrays Methods <-----------


// -------------> Concat() method 
// const concat_Syntax = array1.concat(array2, array3, ..., value1, value2, ...)


const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const array3 = [7, 8, 9]

const concat_Array = array1.concat(array2, array3);

console.log(concat_Array );


// -------------> filter() method 

// const filter_Syntax = array.filter(callback(element, index, array), thisArg);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); 


const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' }
  ];
  
  const topStudents = students.filter(function(student) {
    return student.grade === 'A';

  });
  
  console.log(topStudents);


// -------------> every() method 

// array.every(callback(element, index, array), thisArg);

const numbers2 = [2, 4, 6, 8, 10];

const allEven = numbers2.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven); // Outputs: true



const students2 = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 19 },
    { name: 'Charlie', age: 23 }
  ];
  
  const allAdults = students2.every(function(student) {
    return student.age >= 18;
  });
  
//   console.log(allAdults); // Outputs: true



// -------------> forEach() method 

// array.forEach(callback(currentValue, index, array), thisArg);



// const colors = ['red', 'green', 'blue'];

// colors.forEach(function(color, index) {
//   console.log(`Color at index ${index}: ${color}`);
// });

// // colors.forEach((color, index) => {
// //     console.log(`Color at index ${index}: ${color}`);
// //   });


// const person = {
//     name: 'Alice',
//     hobbies: ['reading', 'swimming', 'cooking'],
//     showHobbies: function() {
//       this.hobbies.forEach(function(hobby) {
//         console.log(`${this.name} enjoys ${hobby}`);
//       });
//     }
//   };
  
//   person.showHobbies();



