document.addEventListener('DOMContentLoaded', function () {
  let firstNum;
  let secondNum;
  let operator;

  var botones = document.querySelectorAll('.btn');
  botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
      let valor = parseFloat(this.textContent);
      console.log('El valor del boton presionado es: ', valor);
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

  function operate(firstNum, secondNum, operator) {}

  function buttonClicked(event) {
    displayValue += event.target.textContent;
    display.textContent = displayValue;
  }
});
