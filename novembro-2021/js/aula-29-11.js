const labelFrase = document.querySelectorAll('#options div label')[0];
labelFrase.innerHTML = "Digite uma frase para o Bart repetir:";

const labelCount = document.querySelectorAll('#options div label')[1];
labelCount.innerHTML = "Digite a quantidade:";

const inputFrase = document.querySelector('#frase-in-options input');
inputFrase.type = "text";

const inputCount = document.querySelector('#count-in-options input');
inputCount.type = "number";
inputCount.min = 1;
inputCount.max = 99;
inputCount.maxlength = 2;
inputCount.step = 1;

const btnStart = document.querySelector('#btn-start');
btnStart.innerHTML = "Começar!";
btnStart.onclick = function () { startWriteFrase(inputFrase, inputCount) };

let textBoard = document.querySelector('#textbox-in-chalkboard');

function startWriteFrase(element, count) {

    removeAllChildNodes(textBoard);
    num = 1;
    let textArray = element.value;
    let countValue = count.value;
    console.log(countValue);
    console.log(element.value.length);

    //for (let a = 0; a < countValue; a++) {
    while (num <= countValue) {

        for (let i = 0; i < element.value.length; i++) {
            console.log("i: " + i);
            let letter = textArray.charAt(i);
            setTimeout(() => textBoard.innerHTML += letter, 75 * i);
            console.log(letter);
        }

        textBoard.innerHTML += `<br>`;

        num++;

    }

    // }
    //textArray.forEach((letter, i) => {
    //    setTimeout(() => {
    //        textBoard.innerHTML += letter;
    //    }, 75 * i);
    //});

}
//textBoard.innerHTML += `<p>${inputFrase.value}</p>`;

function removeAllChildNodes(parent) {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);

    }

}
