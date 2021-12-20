document.querySelector('section p').innerHTML = "Receba os números da sorte da Mega-sena!!!";
const lotteryNumbers = document.querySelector('#lottery-numbers');

const btnStart = document.querySelector('#btn-start');
btnStart.innerHTML = "Começar!";

btnStart.onclick = function () {
    numbers = [];
    removeAllChildNodes(lotteryNumbers);
    let timerId = setInterval(() => generate(1, 60), 1000);
    setTimeout(() => { clearInterval(timerId); }, 6000);
};

let numbers = [];
let add = true;

function generate(lowest, highest) {
    do {
        add = true;
        let randomNumber = getRandomIntInclusive(lowest, highest);
        for (var i = 0; i < highest; i++) {
            if (numbers[i] == randomNumber) {
                add = false;
            }
        }
        if (add) {
            numbers.push(randomNumber);
            lotteryNumbers.innerHTML += `<h1>${randomNumber}</h1>`;
        }
    } while (add == false);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
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
