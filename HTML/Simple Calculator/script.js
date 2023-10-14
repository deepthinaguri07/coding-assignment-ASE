let currentInput = '';
let currentOperator = '';
let previousValue = 0;

document.getElementById('result').value = currentInput;

document.querySelectorAll('.number').forEach(function (button) {
    button.addEventListener('click', function () {
        appendToResult(button.getAttribute('data-value'));
    });
});

document.getElementById('clear').addEventListener('click', function () {
    clearResult();
});

document.querySelectorAll('.operator').forEach(function (button) {
    button.addEventListener('click', function () {
        calculate(button.getAttribute('data-value'));
    });
});

document.getElementById('equals').addEventListener('click', function () {
    calculate('=');
});

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    document.getElementById('result').value = currentInput;
}

function calculate(operator) {
    if (currentOperator === '') {
        previousValue = parseFloat(currentInput);
    } else {
        previousValue = performOperation(previousValue, parseFloat(currentInput), currentOperator);
    }

    if (operator === '=') {
        document.getElementById('result').value = previousValue;
        currentInput = previousValue.toString();
    } else {
        currentInput = '';
    }

    currentOperator = operator;
}

function performOperation(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                alert("Cannot divide by zero.");
                clearResult();
                return 0;
            }
        default:
            return parseFloat(currentInput); 
    }
}

