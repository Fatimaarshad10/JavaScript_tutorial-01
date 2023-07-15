//  Object Literal:
// const student = {
//   name: 'ayesha',
//   age: 20,
//   major: 'Computer Science',
//   getFullName: function() {
//     return this.name;
//   }
// };
// // //   // Accessing object properties
// console.log(student.name);  
// console.log(student.age);   
// console.log(student.major); 
// student.email = "ayesha@example.com";
// console.log(student.email)
// delete student.email;

// console.log(student.email)
// // // // Invoking an object method
// console.log(student.getFullName());  


// Define a function which will work as a method
// function addPrice(amount){
//     this.price = amount; 
//    }
//    function book(title, author){
//     this.title = title; 
//     this.author = author;
//     this.addPrice = addPrice; // Assign that method as property.
//    }
//    var myBook = new book("harry potter", "J.K Rowling");
//    myBook.addPrice(100);
//    document.write("Book title is : " + myBook.title + "<br>");
//    document.write("Book author is : " + myBook.author + "<br>");
//    document.write("Book price is : " + myBook.price + "<br>")

// with keyword
// function addPrice(amount){
//     with(this){
//     price = amount; 
//     }
//    }
//    function book(title, author){
//     this.title = title; 
//     this.author = author;
//     this.price = 0;
//     this.addPrice = addPrice; // Assign that method as property.
//    }
//    var myBook = new book("harry potter", "J.K Rowling");
//  myBook.addPrice(100);
//  document.write("Book title is : " + myBook.title + "<br>");
//  document.write("Book author is : " + myBook.author + "<br>");
//  document.write("Book price is : " + myBook.price + "<br>");


// window object 
// let w = window.innerWidth;
// let h = window.innerHeight;
// console.log(w)
// console.log(h)
// console.log(window.location.hostname)
// console.log(window.location.href)
// console.log(window.location.pathname)
// console.log( window.location.protocol)
// console.log( window.location.port)

// document.getElementById("demo").innerHTML ="Page hostname is " + window.location.hostname;
// document.getElementById("demo").innerHTML = "The full URL of this page is:<br>" + window.location.href
// document.getElementById("demo").innerHTML ="Page path is " + window.location.pathname;
// document.getElementById("demo").innerHTML ="Page protocol is " + window.location.protocol;
// document.getElementById("demo").innerHTML ="Port number is " + window.location.port;

// function newDoc() {
//     window.location.assign("https://classroom.google.com/w/NjEyMDIyMjQwODI1/t/all")
//   }


// DIALOG BOX
// function Warn() {
//     alert ("This is a warning message!");
//     document.write ("This is a warning message!");
//    }
   
// function getValue(){
//     var retVal = prompt("Enter your name : ", "your name here");
    
//     document.write("You have entered : " + retVal);
//    }
   
// function getConfirmation(){
//     var retVal = confirm("Do you want to continue ?");
//     if( retVal == true ){
//     document.write ("User wants to continue!");
//     return true;
//     }else{
//     document.write ("User does not want to continue!");
//     return false;
//     }
//    }





// Constructor function for person objects
// function person (name , age , dob) {
//   this.name = name;
//   this.age = age;
//   this.dob = dob;
// }

// // Array of car objects
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

// // Invoke the function to generate table rows
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