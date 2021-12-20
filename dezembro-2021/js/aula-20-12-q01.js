const inputString = document.querySelector('#input-string');
const btnShowresult = document.querySelector('#btn-execute');
const result = document.querySelector('#result');

btnShowresult.onclick = function () { processInput(greeting) }


function greeting(name) {
    result.innerHTML = `<p>${name}</p>`;
}

function processInput(callback) {
    const text = inputString.value;
    callback(text);
}