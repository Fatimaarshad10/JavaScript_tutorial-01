   
// -----------------function parameters--------------------
// function sayHello(name, age)
// {
//  document.write (name + " is " + age + " years old.");
// }
// sayHello('Ayesha' , 20)
// sayHello('Amna' , 56)

// ---------------return statement-------------------------
// function concatenate(first, last)
// {
//  var full , start;
//  full = first ;

//  return full;
// }
// // document.write(concatenate('ayesha', 'ali'))
// // console.log(concatenate('amna','arshad'))
// function secondFunction()
// {
//  var result;
//  result = concatenate('Ayesha',  'Ali');
//  document.write (result );
// }
// secondFunction()
// -------------------function declare methods ------------------
// function helloFunction (){
//     alert('hello world')
// }
// helloFunction()
// var functionName = function() {
//     console.log('function name ')
//   };
// functionName()

// const arrowFunction = () => {
//    console.warn('arrow function')
//   };
// arrowFunction()
// var constructFunction = new Function('arg1', 'arg2', 'return arg1');
// var result = constructFunction('fatima', 'arshad');
// console.log(result);

// -----------------------switch case-----------------
// var grade = 'A';
//     var outputDiv = document.getElementById('output');
//     outputDiv.innerHTML += "Entering switch block<br />";

//     switch (grade) {
//       case 'A':
//         outputDiv.innerHTML += "<strong style='color: green;'>Good job</strong><br />";
//         break;
//       case 'B':
//         outputDiv.innerHTML += "<strong style='color: blue;'>Pretty good</strong><br />";
//         break;
//       case 'C':
//         outputDiv.innerHTML += "<strong style='color: orange;'>Passed</strong><br />";
//         break;
//       case 'D':
//         outputDiv.innerHTML += "<strong style='color: yellow;'>Not so good</strong><br />";
//         break;
//       case 'F':
//         outputDiv.innerHTML += "<strong style='color: red;'>Failed</strong><br />";
//         break;
//       default:
//         outputDiv.innerHTML += "<strong style='color: gray;'>Unknown grade</strong><br />";
//     }

//     outputDiv.innerHTML += "Exiting switch block";

// ---------------------break statement -----------------------
// var x = 1;
// document.write("Entering the loop<br /> ");
// while (x < 20)
// {
//  if (x == 5){ 
// //  break; // breaks out of loop completely
//  }
//  x = x + 1;
//  document.write( x + "<br />");
// }
// document.write("Exiting the loop!<br /> ");
// var x = 1;
// document.write("Entering the loop<br /> ");


// ---------------------- Same work with for Loop to execute the break statement ----------
    // var x = 1;
    // var outputDiv = document.getElementById('output');
    // outputDiv.innerHTML += "Entering the loop<br />";

    // for (x = 1; x < 20; x++) {
    //   if (x == 5) {
    //     break; // breaks out of loop completely
    //   }
    //   outputDiv.innerHTML += x + "<br />";
    // }

    // outputDiv.innerHTML += "Exiting the loop!<br />";



    // ------------------------------continue statement ---------------------
//     var x = 1;
// document.write("Entering the loop<br /> ");
// while (x < 10)
// {
//  x = x + 1;
//  if (x == 5){ 
//  continue; // skill rest of the loop body
//  }
//  document.write( x + "<br />");
// }
// document.write("Exiting the loop!<br /> ");

//---------------------- label-----------------------

// document.write("Entering the loop!<br /> ");
// outerloop: // This is the label name
// for (var i = 0; i < 5; i++)
// {
//  document.write("Outerloop: " + i + "<br />");
//  innerloop:
//  for (var j = 0; j < 5; j++)
//  {
//     if (j > 3 ) break ; // Quit the innermost loop
//     if (i == 2) break innerloop; // Do the same thing
//     if (i == 4) break outerloop; // Quit the outer loop
//     document.write("Innerloop: " + j + " <br />");
//     }
//    }
//    document.write("Exiting the loop!<br /> ");



// -----------------------events-----------------------
// ---------------------onClick---------------------
// function sayHello() {
//     document.write ("Hello World")
//    }
// on and off
//    document.getElementById("button").onclick = function() {
//     var button = document.getElementById('button');
//     button.style.backgroundColor = 'red';
//     button.innerText = 'OFF';
//     // Add more style properties as needed
// };

// ----------------onSubmit-------------------
// function submitForm() {
//     // Code to be executed when the form is submitted
//     // Add your desired functionality here
//     alert('Form submitted!');
// }
// ----------------------onmouseour onmoureout----------------------
// function over() {
//     document.getElementById("message").innerHTML = "Mouse Over";
// }

// function out() {
//     document.getElementById("message").innerHTML = "Mouse Out";
// }

//------------------------ onchange -----------------------

// function handleChange() {
//     // Code to be executed when the input field value changes
//     // Access the new value using the input field's ID or other methods
//     var newValue = document.getElementById('inputField').value;
//     console.log('New value:', newValue);
// }
// function handleChange() {
//     var newValue = document.getElementById('inputField').value;
//     var p_value = document.getElementById('input-p');
//     p_value.innerHTML = newValue;
// }



// ----------------------problem solving----------------------

// function handleClick() {
//     var inputValue = document.getElementById('myInput').value;
//     var resultElement = document.getElementById('result');
    
//     switch (inputValue) {
//       case 'red':
//         resultElement.textContent = 'You chose red.';
//         resultElement.style.color = 'red';
//         resultElement.style.fontWeight = 'bold';
//         break;
//       case 'blue':
//         resultElement.textContent = 'You chose blue.';
//         resultElement.style.color = 'blue';
//         resultElement.style.fontStyle = 'italic';
//         break;
//       case 'green':
//         resultElement.textContent = 'You chose green.';
//         resultElement.style.color = 'green';
//         resultElement.style.textDecoration = 'underline';
//         break;
//       default:
//         resultElement.textContent = 'Invalid choice.';
//         resultElement.style.color = 'black';
//     }
//   }
  
//   document.getElementById('myButton').onclick = handleClick
// function myFunction() {
//     console.log("Input field is focused!");
//   }
//   function myFunction(event) {
//     console.log("Key pressed:", event.key);
//   }