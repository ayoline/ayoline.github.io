document.querySelector('section p').innerHTML = "Receba os números da sorte da Mega-sena!!!";
const lotteryNumbers = document.querySelector('#lottery-numbers');

const btnStart = document.querySelector('#btn-start');
btnStart.innerHTML = "Começar!";

btnStart.onclick = function () {
    numbers = [];
    let i = 0;
    removeAllChildNodes(lotteryNumbers);

    let timerId = setInterval(function () {
        generateLotteryNumber(1, 60);
        i++;
        if (i == 6) clearInterval(timerId);
    }, 10);
}

let numbers = [];
let add = true;

function generateLotteryNumber(lowest, highest) {
    do {
        add = true;
        let randomNumber = getRandomIntInclusive(lowest, highest);
        if (numbers.includes(randomNumber)) {
            add = false;
        } else if (add) {
            numbers.push(randomNumber);
            lotteryNumbers.innerHTML += `<h1>${randomNumber}</h1>`;
        }
    } while (add == false);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.ceil(Math.random() * (max - min + 1));
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//function setIntervalLimited(callback, interval, x) {
//    for (var i = 0; i < x; i++) {
//        setTimeout(callback, i * interval);
//    }
//}
