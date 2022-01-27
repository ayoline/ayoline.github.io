class Calculator {
    constructor(_operand1, _operand2, _operation) {
        this.operand1 = _operand1;
        this.operand2 = _operand2;
        this.operation = _operation;
        this.clearCalculator();
    }

    clearCalculator() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(_number) {
        if (_number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + _number.toString();
    }

    setOperation(_operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.getResult();
        }
        this.operation = _operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    getResult() {
        let result;
        const previous = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(previous) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case '*':
                result = previous * current;
                break;
            case '÷':
                result = previous / current;
                break;
            default:
                return;
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(_number) {
        const stringNumber = _number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.operand2.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.operand1.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.operand1.innerText = '';
        }
    }
}

const numberButtons = document.querySelectorAll('.data-number');
const operationButtons = document.querySelectorAll('.data-operation');
const equalsButton = document.querySelector('#data-equals');
const deleteButton = document.querySelector('#data-delete');
const allClearButton = document.querySelector('#data-all-clear');
const previousOperandTextEl = document.querySelector('#data-previous-operand');
const currentOperandTextEl = document.querySelector('#data-current-operand');

const calculator = new Calculator(previousOperandTextEl, currentOperandTextEl);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.setOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', button => {
    calculator.getResult();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
    calculator.clearCalculator();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});

document.addEventListener('keydown', function (event) {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*\/]/g;
    if (event.key.match(patternForNumbers)) {
        event.preventDefault();
        calculator.appendNumber(event.key);
        calculator.updateDisplay();
    }
    if (event.key === '.') {
        event.preventDefault();
        calculator.appendNumber(event.key);
        calculator.updateDisplay();
    }
    if (event.key.match(patternForOperators)) {
        event.preventDefault();
        calculator.setOperation(event.key);
        calculator.updateDisplay();
    }
    if (event.key === 'Enter' || event.key === '=') {
        event.preventDefault();
        calculator.getResult();
        calculator.updateDisplay();
    }
    if (event.key === "Backspace") {
        event.preventDefault();
        calculator.delete();
        calculator.updateDisplay();
    }
    if (event.key == 'Delete') {
        event.preventDefault();
        calculator.clearCalculator();
        calculator.updateDisplay();
    }
});