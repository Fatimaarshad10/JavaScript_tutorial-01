

// User-Defined Object (Constructor Function):

// function book(title , author){
//     this.title = title; 
//     this.author = author;
// // console.log(this)
//    }
// //    book.prototype.language = "English";

//    var myBook = new book("Perl", "Mohtashim");
//    console.log(myBook.title)
//  document.write("Book title is : " + myBook.title + "<br>");
//  document.write("Book author is : " + myBook.author + "<br>");
//  document.write("Book langauge is : " + myBook.language + "<br>");


// var student = new Object()
// student.name = 'noor'
// var student2 = new Object()

// console.log(student.name)

// function student (name , rollno){
//     console.log(this)
//     this.name = name
//     this.rollno = rollno
//     // console.log(name)
//     // console.log(rollno)
//     // this.name = 
// }
// var stundent_one = new student('amna', 12)
// console.log(stundent_one.name)
// console.log(stundent_one.rollno)

// var stundent_two = new student('aliza', 12)
// console.log(stundent_two.name)
// console.log(stundent_two.rollno
//     )

// // var x = 10 
// // console.log(x)


// function add(x ,y ){
// console.log(x +y)
// }
// add(2 , 5)

// Define a function which will work as a method
// function addPrice(amount){
//     this.price = amount; 
//    }
//    function book(title, author){
//     this.title = title; 
//     this.author = author;
//     this.addPrice = addPrice; // Assign that method as property.
//    }
//    var myBook = new book("Perl", "Mohtashim");
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
//    var myBook = new book("Perl", "Mohtashim");
//  myBook.addPrice(100);
//  document.write("Book title is : " + myBook.title + "<br>");
//  document.write("Book author is : " + myBook.author + "<br>");
//  document.write("Book price is : " + myBook.price + "<br>");



// Object Literal:
// const student = {
//     name: 'ayesha',
//     age: 20,
//     major: 'Computer Science',
//     enrolledCourses: ['Programming 101', 'Web Development', 'Database Management'],
//     getFullName: function() {
//       return this.name;
//     }
//   };
//   // Accessing object properties
// console.log(student.name);  // Output: John Doe
// console.log(student.age);   // Output: 20
// console.log(student.major); // Output: Computer Science
// // Accessing array property
// console.log(student.enrolledCourses);        // Output: ['Programming 101', 'Web Development', 'Database Management']
// console.log(student.enrolledCourses[0]);     // Output: Programming 101

// // Invoking an object method
// console.log(student.getFullName());  // Output: John Doe


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

// console.log(this)
function first (name , age ){
    console.log('this is first function')

    console.log(name)
    console.log(age)

}