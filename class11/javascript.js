
// =============Object literal / simple Object=========== 
// ===========Without new operator and Object constructor=========
// const  School= {
//     title : 'hello',
// }
// console.log(School)
// // add property
// School.city = 'faisalabad' 
// console.log(School)
// delete property 
// delete School.title 
// console.log(School)
// // check is this object is belong to which constructor 
// console.log(School.constructor)


// ==============With new operator and Object constructor===========
// const school = new Object ({
//     title : 'hello',
// })
// console.log(school.constructor)


// =============Create an object with constructor function============

// function Country (name){
//     this.name = name
// }
// const country_one = new Country('pakistan')
// console.log(Country)
// console.log(Country.constructor)


// ================Primitive Data types==============
// let number = 10 
// // pass by value 
// let number_2 = number
// number = 15
// console.log(number)
// console.log(number_2)

// =============== reference datatype ===============
// let obj = {
//     number : 10
// }
// let obj2 = obj 
// obj.number = 15
// console.log(obj)
// console.log(obj2)


// ==============DIALOG BOX==============


// =============alert===============
// function Warn() {
//     alert("This is a warning message! : ");
//    }
//    Warn()


// =============prompt===============
// function getValue(){
//     var retVal = prompt("Enter your name : ", "your name here");
    
//     document.write("You have entered : " + retVal);
//    }



// ============confirm=============
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