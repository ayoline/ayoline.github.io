document.querySelector('main h1').innerHTML = "JOGO DA VELHA";
const panel = document.querySelector('#result');
panel.innerHTML = `<p>Clique no botão para iniciar a partida</p>`

const btnStart = document.querySelector('#btn-start');
btnStart.innerHTML = "Jogar";
btnStart.onclick = function () {
    resetBoard();
    whoIsNext = 1;
    btnStart.innerHTML = "Reiniciar";
    panel.innerHTML = `<p>Jogada: Player ${whoIsNext}</p>`
};
document.querySelectorAll('.field').forEach(item => {
    item.addEventListener('click', event => {
        nextMove(item);
    })
})

let whoIsNext = 0;
let winner = "";

function nextMove(element) {
    console.log(element);
    let bg = element.style.backgroundImage;
    if (bg == "none" || bg == "") {
        if (whoIsNext == 1) {
            element.style = "background-image: url('../images/02-12/player1.png');"
            whoIsNext = 2;
            panel.innerHTML = `<p>Jogada: Player ${whoIsNext}</p>`
        } else if (whoIsNext == 2) {
            element.style = "background-image: url('../images/02-12/player2.png');"
            whoIsNext = 1;
            panel.innerHTML = `<p>Jogada: Player ${whoIsNext}</p>`
        }
        gameOver();
    }
}

function gameOver() {
    if (sameFields(1, 2, 3) || sameFields(4, 5, 6) || sameFields(7, 8, 9) ||
        sameFields(1, 4, 7) || sameFields(2, 5, 8) || sameFields(3, 6, 9) ||
        sameFields(1, 5, 9) || sameFields(3, 5, 7)
    ) {
        panel.innerHTML = `<h1>O jogador ${winner} venceu!</h1>`
        panel.innerHTML += `<p>Clique no botão para reiniciar a partida</p>`
        whoIsNext = 0;
        btnStart.innerHTML = "Jogar Novamente";
        return true;
    }
    gameDraw();
}

function sameFields(a, b, c) {
    let bgA = document.querySelector('#field' + a).style.backgroundImage;
    let bgB = document.querySelector('#field' + b).style.backgroundImage;
    let bgC = document.querySelector('#field' + c).style.backgroundImage;

    if ((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {
        if (bgA.indexOf("player1.png") >= 0)
            winner = "1";
        else
            winner = "2";
        return true;
    }
    else {
        return false;
    }
}

function resetBoard() {
    for (let i = 1; i < 10; i++) {
        document.querySelector('#field' + i).style.backgroundImage = "";
    }
}

function gameDraw() {
    let draw = false;
    for (let i = 1; i < 10; i++) {
        const bg = document.querySelector('#field' + i).style.backgroundImage;
        if (bg == "none" || bg == "") {
            return false;
        } else {
            draw = true;
        }
    }
    if (draw) {
        panel.innerHTML = `<h1>O jogo Empatou!</h1>`
        panel.innerHTML += `<p>Clique no botão para reiniciar a partida</p>`
        btnStart.innerHTML = "Jogar Novamente";
        whoIsNext = 0;
    }
}