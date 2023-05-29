// ------------DOM-----------
// document.body.style.background = 'red'; // make the background red
// setTimeout(() => document.body.style.background = '', 3000); // return back
// document.getElementsByTagName('p'
// ---------Example Code----------
// // Accessing window object properties
// console.log(window.innerWidth); // Accessing window width
// console.log(window.document.title); // Accessing document title
// console.log(location.href); // Accessing current URL

// // Modifying window object properties
// window.document.title = "My Website";
// console.log(window.document.title)

// -----------METHOD-----------
// let myElement = document.getElementById("myElement");
// console.log(myElement); // Output: Element object with the specified ID or null
// Accessing innerText
// let myElement = document.getElementById("myElement");
// let textContent = myElement.innerText;
// console.log(textContent); // Output: Text content of the element

// // Modifying innerText
// myElement.innerText = "Updated text content";

// Changing element style
// let myElement = document.getElementById("myElement");
// myElement.style.color = "yellow";
// myElement.style.fontSize = "20px";


// let tag_name = document.getElementsByTagName("h1")
// tag_name.style.color = "pink"
// console.log(tag_name.style.color = "pink")

 // Select elements by class name
//  let elements = document.getElementsByClassName("highlight");

// //  // Accessing elements in the collection
//  for (let i = 0; i < 2 ; i++) {
//    let element = elements[i];
//    element.innerText = "Updated Text";
//    element.style.color = "blue";
//  }

// let elements = document.getElementsByTagName("p");
// let firstElement = elements[0];
// for (let i = 0; i < elements.length; i++) {
//     let element = elements[i];
//     // Do something with each element
//     console.log(element.textContent);
//   }
  
// query selector 
// Selecting a single element by ID
// let elementById = document.querySelector("#myElement");

// // Selecting a single element by class name
// let elementByClass = document.querySelector(".highlight");
// for (let i = 0; i < elementByClass.length; i++) {
//        let element = elementByClass[i];
//        element.innerText = "Updated Text";
//        element.style.color = "blue";
//      } 
//     //  not the loop implement here 


// // Selecting a single element by tag name
// let elementByTag = document.querySelector("p");

// let elements = document.querySelectorAll(".highlight");

// for (let i = 0; i < elements.length; i++) {
//   let element = elements[i];
//   // Do something with each element
//   console.log(element.textContent);
// }

// 

// console method 
// console.log('hello')
// console.warn('hello')
// console.info('hello')
// console.error('error')
console.clear()

function myFunction(){
    var a , b
    a = 10 
    b = 20 
    return a + b

}console.log(myFunction())

// myFunction()
// window object 
// Accessing the window object
// console.log(window);

// // Accessing properties and methods of the window object
// console.log(window.innerWidth); // Outputs the inner width of the browser window
// console.log(window.innerHeight); // Outputs the inner height of the browser window

// // Modifying the window object properties
// window.document.title = "My Website"; // Sets the title of the document

// // Opening a new window
// // window.open("https://wordpress.org/themes/search/artist/", "_blank");

// // Displaying an alert dialog using the window object
// window.alert("Welcome to my website!");

// // Confirming user's choice using the window object
// let result = window.confirm("Are you sure you want to proceed?");
// if (result) {
//   console.log("User confirmed.");
// } else {
//   console.log("User canceled.");
// }

// // Prompting user for input using the window object
// let name = window.prompt("Please enter your name:");
// console.log("Hello, " + name + "!");

// // Navigating to a different URL using the window object
// window.location.href = "https://wordpress.org/themes/search/artist/";



















// ------------function------------
    // function sayHello()
    // {
    //  alert("Hello there");
    // }
    // sayHello()
    // function parameters
//     function sayHello(name, age)
// {
//  document.write (name + " is " + age + " years old.");
// }
// // return concatenates 
// function concatenate(first, last)
// {
//  var full;
//  full = first + last;
//  return full;
// }
// function secondFunction()
// {
//  var result;
//  result = concatenate('Zara', 'Ali');
//  document.write (result );
// }
// nested function
function outerFunction() {
    let outerVariable = "I'm from the outer .";
  
    function innerFunction() {
      let innerVariable = "I'm from the inner function.";
      console.log(outerVariable);
      console.log(innerVariable);
    }
  
    innerFunction();
  }
  
  outerFunction();

  function SumFunction(a,b){
    return a + b
  }
  console.log(SumFunction(4,3))
  console.log(SumFunction(6,4))

