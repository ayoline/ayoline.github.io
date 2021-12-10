document.querySelector('main h1').innerHTML = "Corrida Randômica +";
document.querySelector('#titles-in-section-left h2').innerHTML = "Competidores";
document.querySelectorAll('#players-in-section-left p')[0].innerHTML = "Pedro";
document.querySelectorAll('#players-in-section-left p')[1].innerHTML = "Juca";
document.querySelectorAll('#players-in-section-left p')[2].innerHTML = "Edna";
document.querySelector('#board-result-in-main-board h2').innerHTML = "Resultado: ";
document.querySelector('#board-rules-in-section-right h2').innerHTML = "Regras";
const rules = document.querySelector('#board-rules-in-section-right p');
rules.innerHTML = "O vencedor da corrida é determinado pelo carrinho que terminar mais vezes em primeiro lugar."
rules.innerHTML += `<br><br>Ou seja, Ganha quem vencer O_o.`;
rules.innerHTML += '<br><br>*Limite de voltas: 50.000'

const fastMode = document.querySelector('#fast-mode');
fastMode.type = "radio";
fastMode.name = "mode";
fastMode.checked = true;
const fastModeLabel = document.querySelectorAll('#modes-in-section-right label')[0];
fastModeLabel.htmlFor = "fast-mode";
fastModeLabel.innerHTML = "Corrida rápida";

const proMode = document.querySelector('#pro-mode');
proMode.type = "radio";
proMode.name = "mode";
const proModeLabel = document.querySelectorAll('#modes-in-section-right label')[1];
proModeLabel.htmlFor = "pro-mode";
proModeLabel.innerHTML = "Grande Prêmio";

const enduroMode = document.querySelector('#enduro-mode');
enduroMode.type = "radio";
enduroMode.name = "mode";
const enduroModeLabel = document.querySelectorAll('#modes-in-section-right label')[2];
enduroModeLabel.htmlFor = "enduro-mode";
enduroModeLabel.innerHTML = "Enduro";

const customMode = document.querySelector('#custom-mode');
customMode.type = "radio";
customMode.name = "mode";
customMode.value = 0;
const customModeform = document.querySelectorAll('#modes-in-section-right input')[4];
customModeform.type = "number";
customModeform.value = 0;
customModeform.placeholder = "Qtde de voltas";
customModeform.htmlFor = "custom-mode";
customModeform.innerHTML = "Custom";

const btnStart = document.querySelector('#btn-start');
btnStart.innerHTML = "Começar";
btnStart.onclick = function () { startRace() };

let boxPanel = new Array;
boxPanel.push(document.querySelector('#pedro-box'));
boxPanel.push(document.querySelector('#juca-box'));
boxPanel.push(document.querySelector('#edna-box'));

const carModels = {
    popular: {
        type: 'Popular',
        velMin: { min: 110, max: 130 },
        velMax: { min: 180, max: 200 },
        carSkid: { min: 3, max: 4 },
    },
    sport: {
        type: 'Sport',
        velMin: { min: 125, max: 145 },
        velMax: { min: 195, max: 215 },
        carSkid: { min: 2, max: 3 },
    },
    superSport: {
        type: 'Super Sport',
        velMin: { min: 140, max: 160 },
        velMax: { min: 210, max: 230 },
        carSkid: { min: 1, max: 1.75 },
    }
};

const players = [
    {
        id: 0,
        name: 'Pedro',
        wins: 0,
        score: 0,
        level: 0,
        car: {
            type: '',
            velMin: 0,
            velMax: 0,
            carSkid: 0,
        },
    },
    {
        id: 1,
        name: 'Juca',
        wins: 0,
        score: 0,
        level: 0,
        car: {
            type: '',
            velMin: 0,
            velMax: 0,
            carSkid: 0,
        },
    },
    {
        id: 2,
        name: 'Edna',
        wins: 0,
        score: 0,
        level: 0,
        car: {
            type: '',
            velMin: 0,
            velMax: 0,
            carSkid: 0,
        },
    },
]

function startRace() {
    resetAll();
    generateCars();

    if (fastMode.checked) {

        const a = ["a", "b", "c"];
        a.forEach((element) => {
            console.log(element);
        });

        //for (let i = 0; i < 10; i++) {
        //    resultOfEachLap();
        //}
        whoIsChampion();
    } else if (proMode.checked) {
        for (let i = 0; i < 70; i++) {
            resultOfEachLap();
        }
        whoIsChampion();
    } else if (enduroMode.checked) {
        for (let i = 0; i < 160; i++) {
            resultOfEachLap();
        }
        whoIsChampion();
    } else if (customMode.checked) {
        if (customModeform.value > 0 && customModeform.value <= 50000) {
            for (let i = 0; i < customModeform.value; i++) {
                resultOfEachLap();
            }
            whoIsChampion();
        } else {
            resetAll();
        }
    }
}

function resultOfEachLap() {

    for (let i = 0; i < players.length; i++) {
        if (players[i].car.type == "Popular") {
            players[i].car.velMin = getRandomIntInclusive(carModels.popular.velMin.min, carModels.popular.velMin.max);
            players[i].car.velMin = ((players[i].level * players[i].car.velMin) / 100) + players[i].car.velMin;
            players[i].car.velMax = getRandomIntInclusive(carModels.popular.velMax.min, carModels.popular.velMax.max);
            players[i].car.velMax = ((players[i].level * players[i].car.velMax) / 100) + players[i].car.velMax;
            players[i].car.carSkid = (Math.random() * (carModels.popular.carSkid.max - carModels.popular.carSkid.min) + carModels.popular.carSkid.min).toFixed(2);
        } else if (players[i].car.type == "Sport") {
            players[i].car.velMin = getRandomIntInclusive(carModels.sport.velMin.min, carModels.sport.velMin.max);
            players[i].car.velMin = ((players[i].level * players[i].car.velMin) / 100) + players[i].car.velMin;
            players[i].car.velMax = getRandomIntInclusive(carModels.sport.velMax.min, carModels.sport.velMax.max);
            players[i].car.velMax = ((players[i].level * players[i].car.velMax) / 100) + players[i].car.velMax;
            players[i].car.carSkid = (Math.random() * (carModels.sport.carSkid.max - carModels.sport.carSkid.min) + carModels.sport.carSkid.min).toFixed(2);
        } else if (players[i].car.type == "Super Sport") {
            players[i].car.velMin = getRandomIntInclusive(carModels.superSport.velMin.min, carModels.superSport.velMin.max);
            players[i].car.velMin = ((players[i].level * players[i].car.velMin) / 100) + players[i].car.velMin;
            players[i].car.velMax = getRandomIntInclusive(carModels.superSport.velMax.min, carModels.superSport.velMax.max);
            players[i].car.velMax = ((players[i].level * players[i].car.velMax) / 100) + players[i].car.velMax;
            players[i].car.carSkid = (Math.random() * (carModels.superSport.carSkid.max - carModels.superSport.carSkid.min) + carModels.superSport.carSkid.min).toFixed(2);
        }


    }

    let pedroVel = getRandomIntInclusive(players[0].car.velMin, players[0].car.velMax);
    let JucaVel = getRandomIntInclusive(players[1].car.velMin, players[1].car.velMax);
    let ednaVel = getRandomIntInclusive(players[2].car.velMin, players[2].car.velMax);

    pedroVel = pedroVel - ((players[0].car.carSkid / 100) * pedroVel);
    JucaVel = JucaVel - ((players[1].car.carSkid / 100) * JucaVel);
    ednaVel = ednaVel - ((players[2].car.carSkid / 100) * ednaVel);

    if (pedroVel > JucaVel && pedroVel > ednaVel) {
        players[0].wins++;
    } else if (JucaVel > pedroVel && JucaVel > ednaVel) {
        players[1].wins++;
    } else {
        players[2].wins++;
    }
}

function generateCars() {
    for (let i = 0; i < players.length; i++) {
        let whatIsTheCar = getRandomIntInclusive(1, 100);
        if (whatIsTheCar <= 60) {
            players[i].car.type = carModels.popular.type;
            //players[i].car.type = carModels.popular.type;
            //players[i].car.velMin = getRandomIntInclusive(carModels.popular.velMin.min, carModels.popular.velMin.max);
            //players[i].car.velMax = getRandomIntInclusive(carModels.popular.velMax.min, carModels.popular.velMax.max);
            //players[i].car.carSkid = (Math.random() * (carModels.popular.carSkid.max - carModels.popular.carSkid.min) + carModels.popular.carSkid.min).toFixed(2);
            showCarByLevel(carModels.popular, players[i].id);
        } else if (whatIsTheCar > 60 && whatIsTheCar <= 95) {
            players[i].car.type = carModels.sport.type;
            //players[i].car.velMin = getRandomIntInclusive(carModels.sport.velMin.min, carModels.sport.velMin.max);
            //players[i].car.velMax = getRandomIntInclusive(carModels.sport.velMax.min, carModels.sport.velMax.max);
            //players[i].car.carSkid = (Math.random() * (carModels.sport.carSkid.max - carModels.sport.carSkid.min) + carModels.sport.carSkid.min).toFixed(2);
            showCarByLevel(carModels.sport, players[i].id);
        } else {
            players[i].car.type = carModels.superSport.type;
            //players[i].car.velMin = getRandomIntInclusive(carModels.superSport.velMin.min, carModels.superSport.velMin.max);
            //players[i].car.velMax = getRandomIntInclusive(carModels.superSport.velMax.min, carModels.superSport.velMax.max);
            //players[i].car.carSkid = (Math.random() * (carModels.superSport.carSkid.max - carModels.superSport.carSkid.min) + carModels.superSport.carSkid.min).toFixed(2);
            showCarByLevel(carModels.superSport, players[i].id);
        }
    }
}

function showCarByLevel(carType, playerId) {
    i = playerId;

    boxPanel[i].innerHTML += `<p>Tipo: ${carType.type}</p>`;
    boxPanel[i].innerHTML += `<p>Velocidade: (+${players[i].level}%)</p>`;
    boxPanel[i].innerHTML += `<p>Min: ${carType.velMin.min} - ${carType.velMin.max} km/h</p>`;
    boxPanel[i].innerHTML += `<p>Max: ${carType.velMax.min} - ${carType.velMax.max} km/h</p>`;
    boxPanel[i].innerHTML += `<p>Derrapagem: ${carType.carSkid.min} - ${carType.carSkid.max} %</p>`;
    boxPanel[i].innerHTML += `<p>Level: ${players[i].level}</p>`;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function whoIsChampion() {
    const pedro = players[0];
    const juca = players[1];
    const edna = players[2];

    for (let i = 0; i < players.length; i++) {
        boxPanel[i].innerHTML += `<br><p style="color: #055D91;font-weight: bold;">Venceu:</p>`
        boxPanel[i].innerHTML += `<p>${players[i].wins} corridas</p>`
    }

    if (pedro.wins > juca.wins && pedro.wins > edna.wins) {
        firstPlace(pedro.id);
        if (juca.wins > edna.wins) {
            secondPlace(juca.id);
            thirdPlace(edna.id);
        } else {
            secondPlace(edna.id);
            thirdPlace(juca.id);
        }
    } else if (juca.wins > pedro.wins && juca.wins > edna.wins) {
        firstPlace(juca.id);
        if (pedro.wins > edna.wins) {
            secondPlace(pedro.id);
            thirdPlace(edna.id);
        } else {
            secondPlace(edna.id);
            thirdPlace(pedro.id);
        }
    } else if (edna.wins > pedro.wins && edna.wins > juca.wins) {
        firstPlace(edna.id);
        if (pedro.wins > juca.wins) {
            secondPlace(pedro.id);
            thirdPlace(juca.id);
        } else {
            secondPlace(juca.id);
            thirdPlace(pedro.id);
        }
    } else {
        document.querySelector('#final-result').innerHTML = "Empate!"
    }
}

function firstPlace(playerId) {
    p = playerId;
    document.querySelector('#final-result').innerHTML = `${players[p].name} é o Campeão!`
    boxPanel[p].innerHTML += `<p style="color: #055D91;font-weight: bold;">1º Lugar</p>`
    boxPanel[p].innerHTML += `<p>+ 200 pontos</p>`
    players[p].score += 200;
    concatenateLevels(p);

}

function secondPlace(playerId) {
    p = playerId;
    boxPanel[p].innerHTML += `<p style="color: #055D91;font-weight: bold;">2º Lugar</p>`
    boxPanel[p].innerHTML += `<p>+ 120 pontos</p>`
    players[p].score += 120;
    concatenateLevels(p);
}

function thirdPlace(playerId) {
    p = playerId;
    boxPanel[p].innerHTML += `<p style="color: #055D91;font-weight: bold;">3º Lugar</p>`
    boxPanel[p].innerHTML += `<p>+ 50 pontos</p>`
    players[p].score += 50;
    concatenateLevels(p);
}

function concatenateLevels(playerID) {
    p = playerID;
    let newLevel;
    boxPanel[p].innerHTML += `<p>Total: ${players[p].score}</p>`
    boxPanel[p].innerHTML += `<p>Level: ${players[p].level}</p>`
    newLevel = parseInt((players[p].score / 450));

    if (newLevel > players[p].level && newLevel < 11) {
        players[p].level = newLevel;
        boxPanel[p].innerHTML += `<p>New Level: ${players[p].level}</p>`
    }
}

function resetAll() {
    for (let i = 0; i < boxPanel.length; i++) {
        removeAllChildNodes(boxPanel[i]);
        players[i].wins = 0;
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}