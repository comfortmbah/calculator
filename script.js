let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let resetScreen = false;

const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator_keys");
const firstOutput = document.querySelector('.firstOutput');
const secondOutput = document.querySelector('.secondOutput')

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    
    if (!action) {
      appendNumber(keyContent);
    }
    if (action === 'decimal') {
      appendPoint();
    }
    if (action === 'all_clear') {
      clear();
    }
    if (action === 'clear') {
      deleteNumber();
    }
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      setOperation(keyContent);
    }
  }  
});

function screenReset() {
  firstOutput.textContent = ''
  resetScreen = false
}

function appendNumber(number) {
  if (firstOutput.textContent === '0' || resetScreen) {
    firstOutput.textContent = number;
  } else {
    firstOutput.textContent += number;
  }
}

function appendPoint() {
  if (resetScreen) screenReset();
  if (firstOutput.textContent === '') {
    firstOutput.textContent = '0';
  }
  if (firstOutput.textContent.includes('.')) return
  firstOutput.textContent += '.';
}

function clear() {
  firstOutput.textContent = '0';
  secondOutput.textContent = '';
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
}

function deleteNumber() {
  firstOutput.textContent = firstOutput.textContent.toString().slice(0, -1);
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate()
  firstOperand = firstOutput.textContent;
  currentOperation = operator;
  secondOutput.textContent = `${firstOperand} ${currentOperation}`;
  resetScreen = true;
}

function evaluate() {
  if (currentOperation == null || resetScreen) return
  if (currentOperation === '÷' && firstOutput.textContent === '0') {
    alert('You can\'t divide by 0');
  }
  secondOperand = firstOutput.textContent;
  firstOutput.textContent = operate(firstOperand, secondOperand, currentOperation)
  secondOutput.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
  currentOperation = null;
}

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

function operate(a, b, operator) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}