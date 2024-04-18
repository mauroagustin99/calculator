document.addEventListener('DOMContentLoaded', function () {
  const maxDigits = 10;
  let firstNum = '';
  let secondNum = '';
  let operator;

  const screen = document.querySelector('.calculator-screen');
  var btnNumber = document.querySelectorAll('.btn.number');
  btnNumber.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (firstNum.length < maxDigits) {
        value = parseFloat(this.textContent);

        firstNum += value;
        console.log('El valor del boton presionado es: ', firstNum);
        screen.innerHTML = firstNum;
      }
    });
  });

  var btnOperator = document.querySelectorAll('.btn.operator');
  btnOperator.forEach(function (btn) {
    btn.addEventListener('click', function () {
      operator = this.textContent;
      console.log('El valor del boton presionado es: ', operator);
      screen.innerHTML = operator;
    });
  });

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function operate(firstNum, secondNum, operator) {
    switch (operator) {
      case '+':
        return add(firstNum, secondNum);
      case '-':
        return subtract(firstNum, secondNum);
      case '*':
        return multiply(firstNum, secondNum);
      case '/':
        return divide(firstNum, secondNum);
      default:
        return 'Operador no válido';
    }
  }

  function buttonClicked(event) {
    displayValue += event.target.textContent;
    display.textContent = displayValue;
  }
});
