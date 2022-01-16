// c. Crie uma função que sorteie 10 números inteiros aleatórios entre 1 e 100 e
// armazene-os em um vetor. Em seguida retorne o maior valor sorteado entre os 10. 
// Utilize o spread operator combinado com a biblioteca “Math” para escrever seu
// código.

let arrayOfRandomNumbers = [];

function getHighestNumber() {
    for (let i = 0; i < 10; i++) {
        do {
            add = true;
            let randomNumber = getRandomNumber(1, 100);
            if (arrayOfRandomNumbers.includes(randomNumber)) {
                add = false;
            } else if (add) {
                arrayOfRandomNumbers.push(randomNumber);
            }
        } while (add == false);
    }
    const highestNumber = Math.max(...arrayOfRandomNumbers);

    return `The highest Number of the array [${arrayOfRandomNumbers}], is ${highestNumber}`;
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.ceil(Math.random() * (max - min + 1));
}

console.log(getHighestNumber());