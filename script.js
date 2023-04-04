let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

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
  }  
});

function appendNumber(number) {
  if (firstOutput.textContent === '0') {
    firstOutput.textContent = number;
  } else {
    firstOutput.textContent += number;
  }
}

function appendPoint() {
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