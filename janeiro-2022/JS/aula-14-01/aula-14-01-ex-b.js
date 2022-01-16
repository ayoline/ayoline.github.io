// b. Crie uma função que receba dois vetores e retorne a concatenação dos dois em um
// novo vetor. Utilize o spread operator para realizar a concatenação;

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

function getNewArray(arr1, arr2) {
    let newArray = [...arr1, ...arr2];
    return newArray;
}

console.log(getNewArray(array1, array2));