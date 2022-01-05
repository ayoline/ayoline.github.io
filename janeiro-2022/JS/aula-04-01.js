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

const btnBigger = document.querySelector("#btn-bigger");
btnBigger.onclick = function () {
    z.zoomIn();
}

const btnSmaller = document.querySelector("#btn-smaller");
btnSmaller.onclick = function () {
    z.zoomOut();
}

let history = document.getElementById('history');

const zoomInOut = (initialRem) => {
    let rem = initialRem;

    function zoomIn() {
        rem *= 1.05;
        rerender(rem);
    }
    function zoomOut() {
        rem *= 0.95;
        rerender(rem);
    }

    return { zoomIn, zoomOut };
};

const rerender = (rem) => {
    history.setAttribute(
        'style',
        `font-size: ${rem}rem; line-height: ${rem * 1.5}rem;`
    );
};

const z = zoomInOut(1.2);