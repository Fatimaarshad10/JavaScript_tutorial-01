function addition() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('sum').value = result;
    return false;
  }
  
  window.onload = document.getElementById('MyForm').onsubmit = addition;




