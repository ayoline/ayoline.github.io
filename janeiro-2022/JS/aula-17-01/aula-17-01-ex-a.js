// Exercícios:
// 1. Baseado nos seus aprendizados crie códigos javascript para exemplificar os seguintes 
// conceitos: 
// a. Crie uma função capaz de receber infinitos parâmetros e arranjá-los em um único 
// array.

function ShowArgs(..._theArgs) {
    return _theArgs;
}

const arr = [3, 4, 5, 6, 7, 8, 9];

console.log(ShowArgs(1, 2, 'a', 'b', ...arr));