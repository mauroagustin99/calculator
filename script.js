document.addEventListener('DOMContentLoaded', function () {
  const maxDigits = 10;
  let firstNum = '';
  let secondNum = '';
  let operator = '';

  const screen = document.querySelector('.calculator-screen');
  var btnNumber = document.querySelectorAll('.btn.number');

  btnNumber.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (operator === '' && operator !== '=') {
        if (firstNum.length < maxDigits) {
          value = parseFloat(this.textContent);

          firstNum += value;
          console.log('first number: ', firstNum);
          screen.innerHTML = firstNum;
        }
      } else if (operator !== '=') {
        if (secondNum.length < maxDigits) {
          value = parseFloat(this.textContent);

          secondNum += value;
          console.log('second number: ', secondNum);
          screen.innerHTML = firstNum + ' ' + operator + ' ' + secondNum;
        }
      } else {
        operate(firstNum, secondNum, operator);
      }
    });
  });

  var btnOperator = document.querySelectorAll('.btn.operator');
  btnOperator.forEach(function (btn) {
    btn.addEventListener('click', function () {
      operator = this.textContent;
      console.log('operator: ', operator);
      screen.innerHTML = firstNum + ' ' + operator + ' ' + secondNum;
    });
  });

  function add(a, b) {
    return parseFloat(a) + parseFloat(b);
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

  var btnEqual = document.querySelector('.btn.equal');
  btnEqual.addEventListener('click', function () {
    if (firstNum !== '' && secondNum !== '') {
      const result = operate(firstNum, secondNum, operator);
      screen.innerHTML = result;
      firstNum = result.toString();
      secondNum = '';
      operator = '';
    }
  });

  var btnClear = document.querySelector('.btn.clear');
  btnClear.addEventListener('click', function () {
    firstNum = '';
    secondNum = '';
    operator = '';
    screen.innerHTML = '';
  });
});
