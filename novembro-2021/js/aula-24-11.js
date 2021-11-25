document.querySelector('body h1').innerHTML = "Calculadora";

const fieldOne = document.querySelector('#field-1-in-fields');
const operatorValue = document.querySelector('#operator');
operatorValue.innerHTML = ""
const fieldTwo = document.querySelector('#field-2-in-fields');
fieldOne.type = "number";
fieldOne.placeholder = "Primeiro número";
//fieldOne.value = 0;
fieldTwo.placeholder = "Segundo número";
//fieldTwo.value = 0;
fieldTwo.type = "number";

const sum = document.querySelectorAll('.box-operators input')[0];
sum.value = "+";
sum.onclick = function () { operation(sum.value) };
const sub = document.querySelectorAll('.box-operators input')[1];
sub.value = "-";
sub.onclick = function () { operation(sub.value) };
const div = document.querySelectorAll('.box-operators input')[2];
div.value = "/";
div.onclick = function () { operation(div.value) };
const mul = document.querySelectorAll('.box-operators input')[3];
mul.value = "*";
mul.onclick = function () { operation(mul.value) };

document.querySelector('#text-result').innerHTML = "RESULTADO";
const resultField = document.querySelector('#result');
resultField.innerHTML = 0;
const btnReset = document.querySelector('.box-result input');
btnReset.value = "CE";
btnReset.onclick = function () { resetCalculator() };

function resetCalculator() {
    fieldOne.value = "";
    fieldTwo.value = "";
    operatorValue.innerHTML = "";
    resultField.innerHTML = 0;
}

function operation(operator) {
    operatorValue.innerHTML = operator;
    let result = 0;
    let op1 = parseFloat(fieldOne.value);
    let op2 = parseFloat(fieldTwo.value);

    if (operator === "+") {
        result = (op1 + op2);
        resultField.innerHTML = result.toFixed(3);
    }
    if (operator === "-") {
        result = (op1 - op2);
        resultField.innerHTML = result.toFixed(3);
    }
    if (operator === "/") {
        result = (op1 / op2);
        resultField.innerHTML = result.toFixed(3);
    }
    if (operator === "*") {
        result = (op1 * op2);
        resultField.innerHTML = result.toFixed(3);
    }
}


