// Exercicio 1
function createMultiplier(n) {
    return function (x) {
        return x * n;
    };
}

let multiplyBy5 = createMultiplier(5);

console.log(multiplyBy5(10));
console.log(multiplyBy5(12));
console.log(multiplyBy5(7));


// Exercicio 2
let history = document.querySelector('#history').style.fontSize;

const btnBigger = document.querySelector("#btn-bigger");
btnBigger.onclick = function () {
    zoom(1);
}

const btnSmaller = document.querySelector("#btn-smaller");
btnSmaller.onclick = function () {
    zoom();
}

function createMultiplier(n) {
    return function (x) {
        return x * n;
    };
}
counter = 15;

function zoom(n) {
    function plus() { counter += 1; }
    function down() { counter -= 1; }
    if (n == 1) {
        plus();
    } else {
        down();
    }
    document.querySelector('#history').style.fontSize = counter + "px";
}