document.querySelector('main h1').innerHTML = "ORDENAÇÃO NUMÉRICA"
document.querySelector('#second-section-in-main h2').innerHTML = "Números salvos"

const inputNumbers = document.querySelectorAll('#box-in-first-section input');
inputNumbers[0].type = "number";
inputNumbers[1].type = "number";
inputNumbers[2].type = "number";
inputNumbers[3].type = "number";

const savedNumbers = document.querySelectorAll('#box-in-second-section p');

const btnSave = document.querySelector('#btn-save');
btnSave.innerHTML = "Armazenar números";
btnSave.onclick = function () { saveNumbers() };

const btnAscendingOrder = document.querySelector('#btn-ascending-order');
btnAscendingOrder.innerHTML = "Ordem Crescente";
btnAscendingOrder.onclick = function () { numbersInAscendingOrder() };

const btnInvertOrder = document.querySelector('#btn-invert-order');
btnInvertOrder.innerHTML = "Ordem Inversa";
btnInvertOrder.onclick = function () { numbersInInvertOrder() };

function saveNumbers() {

    for (let i = 0; i < inputNumbers.length; i++) {
        savedNumbers[i].innerHTML = inputNumbers[i].value;
    }

}

function numbersInAscendingOrder() {

    let numbersInOrder = new Array;

    for (let i = 0; i < savedNumbers.length; i++) {
        let temp = parseInt(savedNumbers[i].innerHTML);
        numbersInOrder.push(temp);
    }

    bubbleSort(numbersInOrder);

    for (let i = 0; i < numbersInOrder.length; i++) {
        savedNumbers[i].innerHTML = numbersInOrder[i];
    }

}

function numbersInInvertOrder() {

    let reverseArray = new Array;

    for (let i = 0; i < savedNumbers.length; i++) {
        let temp = parseInt(savedNumbers[i].innerHTML);
        reverseArray.push(temp);
    }

    reverseArray = reverse(reverseArray);

    for (let i = 0; i < reverseArray.length; i++) {
        savedNumbers[i].innerHTML = reverseArray[i];
    }

}

function bubbleSort(array) {

    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;

}

function reverse(array) {

    var output = [];
    while (array.length) {
        output.push(array.pop());
    }

    return output;

}