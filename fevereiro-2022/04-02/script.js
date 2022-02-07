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
        console.log('hello')
        console.log(this.operand2)
        $(this.operand2).html(this.getDisplayNumber(this.currentOperand));
        console.log(this.getDisplayNumber(this.currentOperand))
        if (this.operation != null) {
            $(this.operand1).html(`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`);
        } else {
            $(this.operand1).html('');
        }
    }
}

const calculator = new Calculator($('#data-previous-operand'), $('#data-current-operand'));
console.log($('#data-previous-operand'))
console.log($('#data-current-operand'))
$('.data-number').each(function () {
    $(this).click(function () {
        console.log($(this)[0].innerText)
        calculator.appendNumber($(this)[0].innerText);
        calculator.updateDisplay();
    });
});

$('.data-operation').each(function () {
    $(this).click(function () {
        calculator.setOperation($(this)[0].innerText);
        calculator.updateDisplay();
    });
});

$('#data-equals').click(function () {
    calculator.getResult();
    calculator.updateDisplay();
});

$('#data-all-clear').click(function () {
    calculator.clearCalculator();
    calculator.updateDisplay();
});

$('#data-delete').click(function () {
    calculator.delete();
    calculator.updateDisplay();
});

$(document).keydown(function (event) {
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