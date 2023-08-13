// function Country(name) {
//     this.name = name;
// }
// Country.prototype.language = 'urdu';

// const country_one = new Country('pakistan');
// console.log(country_one.name)
// country_one.city = 'faisalabad'
// console.log(country_one.language)

// const country_two = new Country('india');
// console.log(country_two)


// // Adding an instance-specific property directly to 'country_one'
// country_one.religious = 'no';

// console.log(country_one.language);
// console.log(country_two.language);

// console.log(country_one.religious);
// console.log(country_two.religious);


    // var first = prompt("Enter your name : ", "your name here");
    // console.log(first)
    // document.write("You have entered : " + first);
//     function new_value(){
//         var first = confirm("Do you want to continue ?");
//         if( first == true ){
//         document.write ("User wants to continue!");
//         return true;
//         }else{
//         document.write ("User does not want to continue!");
//         return false;
//         }
//     }
//    new_value()
// alert('hello')
// const  Human = {
//     name : 'tusia',
//     hijab: 'purple',
//     goan : 'black',

// }
// console.log(Human)
// console.log(Human.name)
// Human.shoes = 'black'
// console.log(Human)
// delete Human.name
// console.log(Human)

// const school = new Object ({
//     title : 'hello',
// })
// console.log(school.constructor)
// function Human (hijab , goan , shoes , name){
//     this.name = name
//     this.hijab= hijab
//     this.goan = goan
//     this.shoes = shoes
// }
// console.log(Human)
// const first_person = new Human('red', 'black', 'white', 'tusia')
// console.log(first_person.name)
// const second_person = new Human('red', 'black', 'white', 'hifsa')
// console.log(second_person)
// // Number Object in js
// const data  = new Number(23)
// console.log(data.valueOf())

// // properties

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);

// const num1 = new Number(1234567.89);


// console.log(num1.toExponential())
// console.log(num1.toFixed());
// console.log(num1.toLocaleString());
// console.log(num1.toString(5));
// console.log(num1.valueOf())
// console.log(num1.toPrecision(4));

// console.log(num1.toFixed(2));

// const num2 = 123;
// console.log(num2)
// console.log(typeof num1)
// console.log(typeof num2)

// methods
// const largeNumber = 1234567890;
// const smallNumber = 0.00001234;

// console.log(largeNumber.toExponential());
// console.log(smallNumber.toExponential(2));

// const number = 1234567.89;
// const pi = 3.14159265359;

// const numObject = new Number(42);
// console.log(numObject.valueOf());





// Constructor function for person objects
// function person (name , age , dob) {
//   this.name = name;
//   this.age = age;
//   this.dob = dob;
// }

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

// // // Invoke the function to generate table rows
// generateTableRows();




