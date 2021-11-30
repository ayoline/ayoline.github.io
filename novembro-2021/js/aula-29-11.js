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
    let num = 1;
    let textArray = element.value;
    let countValue = count.value;
    let repeatCount = 0;
    let eraseCount = 0;

    console.log(textArray);
    while (num <= countValue) {


        for (let i = 0; i < element.value.length; i++) {
            console.log("i: " + i);
            let letter = textArray.charAt(i);
            //setTimeout(() => {
            textBoard.innerHTML += letter;
            // }, 75 * i);

        }
        textBoard.innerHTML += `<br>`;

        if (repeatCount > 10) {
            repeatCount = 0;
            eraseCount += 1;
            removeAllChildNodes(textBoard);
        }

        repeatCount++;
        num++;
    }

    textBoard.innerHTML += `<br><br><p>O número de linhas digitado foi: ${countValue} vezes`;
    textBoard.innerHTML += `<br><br><p>O Quadro foi apagado: ${eraseCount} vezes`;

}
function removeAllChildNodes(parent) {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}
