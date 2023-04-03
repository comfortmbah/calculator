const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator_keys');
const output = document.querySelector('.output');

keys.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNumber = output.textContent;
        if (!action) {
            if (displayNumber === '0') {
                output.textContent = keyContent;
            } else {
                output.textContent = displayNumber + keyContent;
            }
        }
    }
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

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b)
    switch (operator) {
        case "+":
            return add(a, b);
            case "-":
                return subtract(a, b);
                case "*":
                    return multiply(a, b);
                    case "/":
                        if (b === 0) return null;
                        else return divide(a, b);
                        default:
                            return null;
    }
}
