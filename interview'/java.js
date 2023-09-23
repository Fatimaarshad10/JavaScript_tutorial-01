


  // Get all the boxes (flex-items) that contain the pawn image
  const pawnBoxes = document.querySelectorAll('.box img[src="./pawn.png"]');

  // Add click event listeners to each pawn box
  pawnBoxes.forEach(pawnBox => {
    pawnBox.addEventListener('click', movePawn);
  });

  // Function to move the pawn to the next box
  function movePawn(event) {
    const currentPawnBox = event.currentTarget.parentNode;
    const currentRow = currentPawnBox.parentNode;
    const currentRowIndex = Array.from(currentRow.parentNode.children).indexOf(currentRow);
    const currentBoxIndex = Array.from(currentRow.children).indexOf(currentPawnBox);

    // Calculate the next box index based on the current row and box index
    const nextRowIndex = currentRowIndex + 1;
    const nextBoxIndex = currentBoxIndex + 1;

    // Check if the next row and box exist (within the chessboard)
    const nextRow = currentRow.parentNode.children[nextRowIndex];
    if (nextRow) {
      const nextBox = nextRow.children[nextBoxIndex];
      if (nextBox) {
        // Move the pawn by swapping its parent box with the next box
        nextBox.appendChild(event.currentTarget);
      }
    }
  }

// let num1 = 5;
// let num2 = "5";

// console.log(num1 == num2); 
// console.log(num1 === num2); 

// let array = [3,4,5,6]
// array.slice('3')
// console.log(array)
// array.push(10)
// console.log(array)
// array.unshift(0)
// console.log(array)
// array.pop()
// console.log(array)
// array.shift()
// console.log(array)
// array.splice(3)
// console.log(array)





// const numbers = [1, 2, 3, 4, 5];

// // Double each number in the array using map()
// const doubledNumbers = numbers.map((num) => num * 2);

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// const numbers = [1, 2, 3, 4, 5];

// // Calculate the sum of all numbers in the array using reduce()
// const sum = numbers.reduce((accumulator, current) => console.log(accumulator));

// console.log(sum); // Output: 15

// const fruits = ['apple', 'banana', 'orange'];

// // Log each fruit to the console using forEach()
// fruits.map((data)=> console.log(data))
// fruits.forEach((fruit) => console.log(fruit));



// $(document).ready(function() {
  
//     $("#loadDataBtn").click(function() {
//       $.ajax({
//         url: "https://fakestoreapi.com/products",
//         type: "GET",
//         dataType: "json",
//         success: function(data) {
//   console.log(data)
//           $("#dataContainer").html("Data from server: " + JSON.stringify(data));
//         },
//         error: function(xhr, status, error) {
//           console.error("Error fetching data: " + error);
//         }
//       });
//     });
//   });


//   function Person (name , age){
//     this.name  = name
//     this.age = age
//   }

//   // create a first instance
//   const first_person = new Person ('fatima', 20)
//   console.log(first_person)
// Person.prototype.class = 'yeah'
//   console.log(Person.constructor)
// class Person {
//   constructor(name , age){
//     this.name  = name
//         this.age = age
//   }
//   sayHello() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }
// const first_person = new Person ('fatima', 20)
// console.log(Person.constructor)
// console.log(first_person.sayHello());
//   console.log(first_person)