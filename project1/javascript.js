// function addition() {
//     var num1 = parseFloat(document.getElementById('num1').value);
//     var num2 = parseFloat(document.getElementById('num2').value);
//     var result = num1 + num2;
//     document.getElementById('sum').value = result;
//     return false;
//   }
  
//   window.onload = document.getElementById('MyForm').onsubmit = addition;


function performOperation() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var operation = document.getElementById('operation').value;
  var result;

  switch (operation) {
    case 'Add' : 
    result = num1 + num2;
    break;
    case 'sub' : 
    result = num1 - num2;
    break;
    case 'multi': 
    result = num1 * num2;
    break;
    case 'mod': 
    result = num1 % num2;
    break;
    default: 
    result = "Invalid operation";
  }   
  document.getElementById('sum').value = result;
  return false;
}

window.onload = function() {
  document.getElementById('MyForm').onsubmit = performOperation;
};
