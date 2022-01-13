/*

Exercícios:
1. Crie uma função recursiva que retorne o fatorial de um número inteiro.
2. Crie uma função recursiva que receba como parâmetro uma matriz e seja capaz de exibir 
no console todos os dados que a compõe.
3. Publique o material dos exercícios 1 e 2 no seu github.

*/

// Exercício 2
function showArray(el) {
    let line;

    if (Array.isArray(el)) {
        line = '[' + el.reduce((acc, element) => {
            return (acc + (showArray(element)));
        }, "") + ']';
        return line;
    }
    return el;
}

const array1 = [[1, 2, 3], ["a", "b", "c", "d"], [4, 5, 6]];
console.log(showArray(array1));