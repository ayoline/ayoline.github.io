/*

Exercícios:
1. Crie uma função recursiva que retorne o fatorial de um número inteiro.
2. Crie uma função recursiva que receba como parâmetro uma matriz e seja capaz de exibir 
no console todos os dados que a compõe.
3. Publique o material dos exercícios 1 e 2 no seu github.

*/

// Exercício 1
function factorial(el) {

    if (el < 0 || !Number.isInteger(el)) {
        return `Número é menor que zero: ${el}`;
    } else if (el === 0) {
        console.log(arr);
        return 1;
    }

    arr.push(el);
    return el * factorial(el - 1);
}
let arr = [];
console.log(factorial(9));