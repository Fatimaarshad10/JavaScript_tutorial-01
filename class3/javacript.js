//    const x = 10
   
//    function myFunction (){
//     console.log(x)
//    }
//    myFunction()
//    let y = 20 
//    console.log(y)
//    const z = 30
//    console.log(z)
// let firstValue = 20 
// console.log(firstValue)
// firstValue = 30 
// console.log(firstValue)
// var x = 40
// if(x == 80){
//     console.log('Grade A')
// }
// document.body.style.backgroundColor = 'red'
// else if (x == 50){
//     console.log('Grade B')
// }
// else{
//     console.log('Fail')
// }
// var num1 = 23
// var num2 = 24
// let sum = num1 + num2 
// console.log(sum)

// const PI = 3.14159
// let radius = 5
// let area  = PI * radius * radius
// console.log(area)
// var x = -23
// if(x > 0){
//     console.log('positive value ')
// } else if (x < 0){
//     console.log('negative value ')
// }
// else{
//     console.log ('zero value')
// }

// -----------------function parameters--------------------
// function sayHello(name, age)
// {
//  document.write (name + " is " + age + " years old.");
// }
// sayHello('Ayesha' , 20)
// sayHello('Amna' , 19)
//  var name = 'fatima'
// var age = 23
// console.log(name , 23 )
// name = 'ayesha'
// console.log(name)
// ---------------return statement-------------------------
// function concatenate(first, last)
// {
//  var full 
//  full = first + last;

//  return full;
// }
// // console.log(concatenate(3,5))
// console.log(concatenate('ayeshs',5))

// document.write(concatenate('ayesha', 'ali'))
// console.log(concatenate('amna','arshad'))

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
// var x = 0;
// document.write("Entering the loop<br /> ");
// while (x <= 20)
// {
//  if (x == 5){ 
//  continue; // breaks out of loop completely
//  }
// console.log(x)
// // document.write( x + "<br />");
//  x = x + 1;
// }
// document.write("Exiting the loop!<br /> ");



// ---------------------- Same work with for Loop to execute the break statement ----------
    // var x = 1;
    // var outputDiv = document.getElementById('output');
    // outputDiv.innerHTML += "Entering the loop<br />";

    // for (x = 1; x < 20; x++) {
    //     if (x === 10) {
    //         continue; 
    //     }
    //     console.log(x)
    //     // outputDiv.innerHTML += x + "<br />";
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
    // function toggleButton() {
    //         var button = document.getElementById('button');
    //         if (button.innerText === 'OFF') {
    //             button.innerText = 'ON';
    //             button.style.backgroundColor = 'green';
    //         } else {
    //             button.innerText = 'OFF';
    //             button.style.backgroundColor = 'grey';
    //         }
    //     }

// ----------------onSubmit-------------------
// function submitForm() {
//     // Code to be executed when the form is submitted
//     // Add your desired functionality here
//     alert('Form submitted!');
// }
// ----------------------onmouseour onmoureout----------------------
// function over() {
//     var mouseOver = document.getElementById("message");
//     mouseOver.innerHTML = "Mouse Over";
//     mouseOver.style.backgroundColor = 'red';
   
// }

// function out() {
//     var mouseOut =   document.getElementById("message")
//    mouseOut.innerHTML = "Mouse Out";
//    mouseOut.style.backgroundColor = 'purple'
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
// function myFunction() {
    //     console.log("Input field is focused!");
    //   }
    //   function myFunction(event) {
    //     console.log("Key pressed:", event.key);
    //   }

// ----------------------problem solving----------------------

function handleClick() {
    var inputValue = document.getElementById('myInput').value;
    var resultElement = document.getElementById('result');
    
    switch (inputValue) {
      case 'red':
        resultElement.textContent = 'You chose red.';
        // resultElement.style.backgroundColor = 'red';
        resultElement.style.fontWeight = 'bold';
        document.body.style.backgroundColor = 'red'

        break;
      case 'blue':
        resultElement.textContent = 'You chose blue.';
        // resultElement.style.backgroundColor = 'blue';
        resultElement.style.fontStyle = 'italic';
        document.body.style.backgroundColor = 'blue'

        break;

      case 'green':
        resultElement.textContent = 'You chose green.';
        // resultElement.style.backgroundColor = 'green';
        resultElement.style.textDecoration = 'underline';
        document.body.style.backgroundColor = 'green'

        break;
      default:
        resultElement.textContent = 'Invalid choice.';
        // resultElement.style.backgroundColor = 'black';
        resultElement.style.color = 'white'
        document.body.style.backgroundColor = 'black'

    }
  }
  
  document.getElementById('myButton').onclick = handleClick
  document.getElementById('myButton').onmouseover = function() {
    this.style.backgroundColor = 'black';
  };
  
  document.getElementById('myButton').onmouseout = function() {
    // this.innerHTML = "Mouse Out";
    this.style.backgroundColor = 'grey';
  };