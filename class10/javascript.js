
// variable and function example 
// var name1 = 'ayesha'
// function getFullName (){
//     return console.log(name1)
// }
// getFullName()


//  Object Literal:
// const student = {
//   name: 'ayesha',
//   age: 20,
//   major: 'Computer Science',
//   getFullName: function() {
//     return this.name;
//   }
// };
// Accessing object properties
// console.log(student.name);  
// console.log(student.age);   
// console.log(student.major); 
// add property in object
// student.email = "ayesha@example.com";
// delete property in object 
// delete student.email;
// console.log(student)
// Invoking an object method
// console.log(student.getFullName());  


// Define a function which will work as a method
// function addPrice(amount){
//     this.price = amount; 
//     // console.log(this.price)
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
//    document.write("Book price is : " + myBook.addPrice + "<br>")


// with keyword
// function addPrice(amount){   
//     this.price = amount;   
//    }
//    function book(title, author){
//     this.title = title; 
//     this.author = author;
//     this.price = 0;
//     this.addPrice = addPrice; // Assign that method as property.
//    }
//    var myBook = new book("harry potter", "J.K Rowling");
//    myBook.addPrice(200);
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

