//document.querySelector('.box-title h1').innerHTML = "Coma mesmo! Burguer";
//document.querySelector('.box-title h2').innerHTML = "Monte seu Xis!";

// Radiobtn Bread
document.querySelector('.box-bread h3').innerHTML = "Escolha o pão:";
const breadInput_1 = document.querySelector('#bread-1-in-box-bread');
breadInput_1.type = "radio";
breadInput_1.name = "bread";
breadInput_1.value = 3;
breadInput_1.checked = true;
const breadLabel_1 = document.querySelectorAll('.box-bread label')[0];
breadLabel_1.htmlFor = "bread-1-in-box-bread";
breadLabel_1.innerHTML = "Pão francês (R$3,00)";

const breadInput_2 = document.querySelector('#bread-2-in-box-bread');
breadInput_2.type = "radio";
breadInput_2.name = "bread";
breadInput_2.value = 6;
const breadLabel_2 = document.querySelectorAll('.box-bread label')[1];
breadLabel_2.htmlFor = "bread-2-in-box-bread";
breadLabel_2.innerHTML = "Pão de Brioche (R$6,00)";

const breadInput_3 = document.querySelector('#bread-3-in-box-bread');
breadInput_3.type = "radio";
breadInput_3.name = "bread";
breadInput_3.value = 8;
const breadLabel_3 = document.querySelectorAll('.box-bread label')[2];
breadLabel_3.htmlFor = "bread-3-in-box-bread";
breadLabel_3.innerHTML = "Pão Australiano (R$8,00)";

// RadioBtn Hamburguer
document.querySelector('.box-hamburguer h3').innerHTML = "Escolha o hambúrguer:";
const hamburguerInput_1 = document.querySelector('#hamburguer-1-in-box-hamburguer');
hamburguerInput_1.type = "radio";
hamburguerInput_1.name = "hamburguer";
hamburguerInput_1.value = 13;
hamburguerInput_1.checked = true;
const hamburguerLabel_1 = document.querySelectorAll('.box-hamburguer label')[0];
hamburguerLabel_1.htmlFor = "hamburguer-1-in-box-hamburguer";
hamburguerLabel_1.innerHTML = "Hambúrguer de picanha (R$13,00)";

const hamburguerInput_2 = document.querySelector('#hamburguer-2-in-box-hamburguer');
hamburguerInput_2.type = "radio";
hamburguerInput_2.name = "hamburguer";
hamburguerInput_2.value = 10;
const hamburguerLabel_2 = document.querySelectorAll('.box-hamburguer label')[1];
hamburguerLabel_2.htmlFor = "hamburguer-2-in-box-hamburguer";
hamburguerLabel_2.innerHTML = "Hamburguer de costela (R$10,00)";

const hamburguerInput_3 = document.querySelector('#hamburguer-3-in-box-hamburguer');
hamburguerInput_3.type = "radio";
hamburguerInput_3.name = "hamburguer";
hamburguerInput_3.value = 12;
const hamburguerLabel_3 = document.querySelectorAll('.box-hamburguer label')[2];
hamburguerLabel_3.htmlFor = "hamburguer-3-in-box-hamburguer";
hamburguerLabel_3.innerHTML = "Hamburguer Vegano (R$12,00)";

// RadioBtn Salad
document.querySelector('.box-salad h3').innerHTML = "Escolha a salada:";
const saladInput_1 = document.querySelector('#salad-1-in-box-salad');
saladInput_1.type = "radio";
saladInput_1.name = "salad";
saladInput_1.value = 1.5;
saladInput_1.checked = true;
const saladLabel_1 = document.querySelectorAll('.box-salad label')[0];
saladLabel_1.htmlFor = "salad-1-in-box-salad";
saladLabel_1.innerHTML = "Alface (R$1,50)";

const saladInput_2 = document.querySelector('#salad-2-in-box-salad');
saladInput_2.type = "radio";
saladInput_2.name = "salad";
saladInput_2.value = 1.5;
const saladLabel_2 = document.querySelectorAll('.box-salad label')[1];
saladLabel_2.htmlFor = "salad-2-in-box-salad";
saladLabel_2.innerHTML = "Tomate (R$1,50)";

const saladInput_3 = document.querySelector('#salad-3-in-box-salad');
saladInput_3.type = "radio";
saladInput_3.name = "salad";
saladInput_3.value = 0;
const saladLabel_3 = document.querySelectorAll('.box-salad label')[2];
saladLabel_3.htmlFor = "salad-3-in-box-salad";
saladLabel_3.innerHTML = "Sem salada (R$0,00)";

// RadioBtn Cheese
document.querySelector('.box-cheese h3').innerHTML = "Escolha o queijo:";
const cheeseInput_1 = document.querySelector('#cheese-1-in-box-cheese');
cheeseInput_1.type = "radio";
cheeseInput_1.name = "cheese";
cheeseInput_1.value = 3;
cheeseInput_1.checked = true;
const cheeseLabel_1 = document.querySelectorAll('.box-cheese label')[0];
cheeseLabel_1.htmlFor = "cheese-1-in-box-cheese";
cheeseLabel_1.innerHTML = "Mussarela (R$3,00)";

const cheeseInput_2 = document.querySelector('#cheese-2-in-box-cheese');
cheeseInput_2.type = "radio";
cheeseInput_2.name = "cheese";
cheeseInput_2.value = 3;
const cheeseLabel_2 = document.querySelectorAll('.box-cheese label')[1];
cheeseLabel_2.htmlFor = "cheese-2-in-box-cheese";
cheeseLabel_2.innerHTML = "Prato (R$3,00)";

const cheeseInput_3 = document.querySelector('#cheese-3-in-box-cheese');
cheeseInput_3.type = "radio";
cheeseInput_3.name = "cheese";
cheeseInput_3.value = 5;
const cheeseLabel_3 = document.querySelectorAll('.box-cheese label')[2];
cheeseLabel_3.htmlFor = "cheese-3-in-box-cheese";
cheeseLabel_3.innerHTML = "Cheddar (R$5,00)";

const btnShowCart = document.querySelector('#btnShowCart');
btnShowCart.innerHTML = "Finalizar"
btnShowCart.onclick = function () { calculateHamburguerPrice() };

function calculateHamburguerPrice() {
    let totalPrice;

    if (breadInput_1.checked) {
        let price = parseFloat(breadInput_1.value);
        totalPrice = price;
    } else if (breadInput_2.checked) {
        let price = parseFloat(breadInput_2.value);
        totalPrice = price;
    } else {
        let price = parseFloat(breadInput_3.value);
        totalPrice = price;
    }

    if (hamburguerInput_1.checked) {
        let price = parseFloat(hamburguerInput_1.value);
        totalPrice += price;
    } else if (hamburguerInput_2.checked) {
        let price = parseFloat(hamburguerInput_2.value);
        totalPrice += price;
    } else {
        let price = parseFloat(hamburguerInput_3.value);
        totalPrice += price;
    }

    if (saladInput_1.checked) {
        let price = parseFloat(saladInput_1.value);
        totalPrice += price;
    } else if (saladInput_2.checked) {
        let price = parseFloat(saladInput_2.value);
        totalPrice += price;
    } else {
        let price = parseFloat(saladInput_3.value);
        totalPrice += price;
    }

    if (cheeseInput_1.checked) {
        let price = parseFloat(cheeseInput_1.value);
        totalPrice += price;
    } else if (cheeseInput_2.checked) {
        let price = parseFloat(cheeseInput_2.value);
        totalPrice += price;
    } else {
        let price = parseFloat(cheeseInput_3.value);
        totalPrice += price;
    }

    console.log(totalPrice);

}