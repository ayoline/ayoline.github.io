document.querySelector('main h1').innerHTML = "Corrida Randômica";
document.querySelector('#titles-in-section-left h2').innerHTML = "Competidores";
document.querySelectorAll('#players-in-section-left p')[0].innerHTML = "Pedro";
document.querySelectorAll('#players-in-section-left p')[1].innerHTML = "Juca";
document.querySelectorAll('#players-in-section-left p')[2].innerHTML = "Edna";
document.querySelector('#board-result-in-main-board h2').innerHTML = "Resultado: ";
document.querySelector('#board-rules-in-section-right h2').innerHTML = "Regras";
const rules = document.querySelector('#board-rules-in-section-right p');
rules.innerHTML = "O vencedor da corrida é determinado pelo carrinho que terminar mais vezes em primeiro lugar."
rules.innerHTML += `<br><br>Ou seja, Ganha quem vencer O_o.`;

const fastMode = document.querySelector('#fast-mode');
fastMode.type = "radio";
fastMode.name = "mode";
fastMode.value = 10;
fastMode.checked = true;
const fastModeLabel = document.querySelectorAll('#modes-in-section-right label')[0];
fastModeLabel.htmlFor = "fast-mode";
fastModeLabel.innerHTML = "Corrida rápida";

const proMode = document.querySelector('#pro-mode');
proMode.type = "radio";
proMode.name = "mode";
proMode.value = 70;
const proModeLabel = document.querySelectorAll('#modes-in-section-right label')[1];
proModeLabel.htmlFor = "pro-mode";
proModeLabel.innerHTML = "Grande Prêmio";

const enduroMode = document.querySelector('#enduro-mode');
enduroMode.type = "radio";
enduroMode.name = "mode";
enduroMode.value = 160;
const enduroModeLabel = document.querySelectorAll('#modes-in-section-right label')[2];
enduroModeLabel.htmlFor = "enduro-mode";
enduroModeLabel.innerHTML = "Enduro";

const btnStart = document.querySelector('#btn-start');
btnStart.innerHTML = "Começar";
btnStart.onclick = function () { startRace() };

const pedroMax = 230;
const pedroMin = 150;
const pedroSkid = 0.03;

const jucaMax = 260;
const jucaMin = 120;
const jucaSkid = 0.05;

const ednaMax = 220;
const ednaMin = 180;
const ednaSkid = 0.01;

let pedroBox = document.querySelector('#pedro-box');
let jucaBox = document.querySelector('#juca-box');
let ednaBox = document.querySelector('#edna-box');
let pedroCount = 0;
let jucaCount = 0;
let ednaCount = 0;

function startRace() {

    resetAll();

    if (fastMode.checked) {


        for (let i = 0; i < fastMode.value; i++) {
            let pedroVel = 0;
            let JucaVel = 0;
            let ednaVel = 0;

            pedroVel = getRandomIntInclusive(pedroMin, pedroMax);
            JucaVel = getRandomIntInclusive(jucaMin, jucaMax);
            ednaVel = getRandomIntInclusive(ednaMin, ednaMax);

            pedroVel = pedroVel - (pedroVel * pedroSkid);
            JucaVel = JucaVel - (JucaVel * jucaSkid);
            ednaVel = ednaVel - (ednaVel * ednaSkid);

            if (pedroVel > JucaVel && pedroVel > ednaVel) {
                pedroCount++;
            } else if (JucaVel > pedroVel && JucaVel > ednaVel) {
                jucaCount++;
            } else {
                ednaCount++;
            }

        }

        whoIsChampion();

    } else if (proMode.checked) {

        for (let i = 0; i < proMode.value; i++) {
            let pedroVel = 0;
            let JucaVel = 0;
            let ednaVel = 0;

            pedroVel = getRandomIntInclusive(pedroMin, pedroMax);
            JucaVel = getRandomIntInclusive(jucaMin, jucaMax);
            ednaVel = getRandomIntInclusive(ednaMin, ednaMax);

            pedroVel = pedroVel - (pedroVel * pedroSkid);
            JucaVel = JucaVel - (JucaVel * jucaSkid);
            ednaVel = ednaVel - (ednaVel * ednaSkid);

            if (pedroVel > JucaVel && pedroVel > ednaVel) {
                pedroCount++;
            } else if (JucaVel > pedroVel && JucaVel > ednaVel) {
                jucaCount++;
            } else {
                ednaCount++;
            }

        }

        whoIsChampion();

    } else {

        for (let i = 0; i < enduroMode.value; i++) {
            let pedroVel = 0;
            let JucaVel = 0;
            let ednaVel = 0;

            pedroVel = getRandomIntInclusive(pedroMin, pedroMax);
            JucaVel = getRandomIntInclusive(jucaMin, jucaMax);
            ednaVel = getRandomIntInclusive(ednaMin, ednaMax);

            pedroVel = pedroVel - (pedroVel * pedroSkid);
            JucaVel = JucaVel - (JucaVel * jucaSkid);
            ednaVel = ednaVel - (ednaVel * ednaSkid);

            if (pedroVel > JucaVel && pedroVel > ednaVel) {
                pedroCount++;
            } else if (JucaVel > pedroVel && JucaVel > ednaVel) {
                jucaCount++;
            } else {
                ednaCount++;
            }

        }

        whoIsChampion();

    }
}

function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function removeAllChildNodes(parent) {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}

function whoIsChampion() {

    pedroBox.innerHTML += `<p>Venceu:</p>`
    pedroBox.innerHTML += `<p>${pedroCount} corridas</p>`

    jucaBox.innerHTML += `<p>Venceu:</p>`
    jucaBox.innerHTML += `<p>${jucaCount} corridas</p>`

    ednaBox.innerHTML += `<p>Venceu:</p>`
    ednaBox.innerHTML += `<p>${ednaCount} corridas</p>`

    if (pedroCount > jucaCount && pedroCount > ednaCount) {
        document.querySelector('#final-result').innerHTML = "Pedro é o Campeão!"
    } else if (jucaCount > pedroCount && jucaCount > ednaCount) {
        document.querySelector('#final-result').innerHTML = "Juca é o Campeão!"
    } else if (ednaCount > pedroCount && ednaCount > jucaCount) {
        document.querySelector('#final-result').innerHTML = "Edna é a Campeã!"
    } else {
        document.querySelector('#final-result').innerHTML = "Empate!"
    }
}

function resetAll() {

    removeAllChildNodes(pedroBox);
    removeAllChildNodes(jucaBox);
    removeAllChildNodes(ednaBox);

    pedroCount = 0;
    jucaCount = 0;
    ednaCount = 0;

}