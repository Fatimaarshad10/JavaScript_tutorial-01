// ---------------Problem no 1----------------
// function changeBackgroundColor() {
//     let element = document.body
//     element.style.backgroundColor = 'blue';
//   }
// function addText(){
//     var text = document.getElementById('myElement')
//     text.innerHTML = 'hello world'
// }

// ------------------Problem no 2-----------
// var element = document.getElementById("myElement");

// // Change the innerHTML of the element
// element.innerHTML = "Yes";

//  onClick Events
// function newFunction() {
//     var element = document.getElementById("myElement");
//     element.innerHTML = 'You clicked me :) I am working!';
//     element.style.color = 'green'
//   }


//  onSubmit Events
// function myFunction() {
    
//     alert("The form was submitted");
//   }

// onmouseover and onmouseout
// function over() {
//     var resultElement = document.getElementById("result");
//     resultElement.innerHTML = "Mouse Over";
//     resultElement.style.color = 'green';
//   }
  
//   function out() {
//     var resultElement = document.getElementById("result");
//     resultElement.style.color = 'red';
//   }
// onChange 
// function myFunction() {
//     var x = document.getElementById("mySelect").value;
//     document.getElementById("demo").innerHTML = "You selected: " + x;
//   }

// objects with property 
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
// //   Accessing Object Properties:
//  console.log(person.firstName) 
//  console.log(person['firstName'])

//  A method is a function stored as a property.
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
// console.log(person.fullName())
// name1 = person.fullName;
// console.log(name1)


// let w = window.innerWidth;
// let h = window.innerHeight;
// console.log(w)
// console.log(h)
// document.getElementById("demo").innerHTML ="Page hostname is " + window.location.hostname;
// document.getElementById("demo").innerHTML = "The full URL of this page is:<br>" + window.location.href
// document.getElementById("demo").innerHTML ="Page path is " + window.location.pathname;
// document.getElementById("demo").innerHTML ="Page protocol is " + window.location.protocol;
// document.getElementById("demo").innerHTML ="Port number is " + window.location.port;

// function newDoc() {
//     window.location.assign("https://classroom.google.com/w/NjEyMDIyMjQwODI1/t/all")
//   }