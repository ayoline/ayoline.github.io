//document.querySelector('.box-title h1').innerHTML = "Coma mesmo! Burguer";
//document.querySelector('.box-title h2').innerHTML = "Monte seu Xis!";
document.querySelector('.box-title div img').src = "../images/aula-25-11/hamburguer.png";

const breads = [
    {
        id: 1,
        name: 'Pão francês',
        price: 3.00
    },
    {
        id: 2,
        name: 'Pão de Brioche',
        price: 6.00
    },
    {
        id: 3,
        name: 'Pão Australiano',
        price: 8.00
    }
]

const hamburgers = [
    {
        id: 4,
        name: 'Hambúrguer de picanha',
        price: 13.00
    },
    {
        id: 5,
        name: 'Hamburguer de costela',
        price: 10.00
    },
    {
        id: 6,
        name: "Hamburguer vegano",
        price: 12.00
    }
]

const salads = [
    {
        id: 7,
        name: 'Alface',
        price: 1.5
    },
    {
        id: 8,
        name: 'Tomate',
        price: 1.5
    },
    {
        id: 9,
        name: 'Sem salada',
        price: 0.00
    }
]

const cheeses = [
    {
        id: 10,
        name: 'Mussarela',
        price: 3.00
    },
    {
        id: 11,
        name: 'Queijo prato',
        price: 3.00
    },
    {
        id: 12,
        name: 'Cheddar',
        price: 5.00
    }
]

const order = {
    breadPrice: 0.00,
    breadName: "",
    saladPrice: 0.00,
    saladName: "",
    hamburguerPrice: 0.00,
    hamburguerName: "",
    cheesePrice: 0.00,
    cheeseName: ""
}

function loadPage() {

    document.querySelector('.box-bread h3').innerHTML = "Escolha o pão:";
    document.querySelector('.box-hamburguer h3').innerHTML = "Escolha o hambúrguer:";
    document.querySelector('.box-salad h3').innerHTML = "Escolha a salada:";
    document.querySelector('.box-cheese h3').innerHTML = "Escolha o queijo:";

    const breadForm = document.getElementById('box-bread');
    const hamburgerForm = document.getElementById('box-hamburguer');
    const saladForm = document.getElementById('box-salad');
    const cheeseForm = document.getElementById('box-cheese');

    for (let i = 0; i < breads.length; i++) {
        breadForm.innerHTML += `
            <input
                type="radio"
                name="bread"
                value="${breads[i].price}"
                id="${breads[i].id}"
                breadname="${breads[i].name}"
                onClick="selectBread(this.id)"
                />
            <label for="${breads[i].id}">${breads[i].name} (R$${breads[i].price.toFixed(2)})</label>
        `
    }

    for (let i = 0; i < hamburgers.length; i++) {
        hamburgerForm.innerHTML += `
            <input
                type="radio"
                name="hamburger"
                value="${hamburgers[i].price}"
                id="${hamburgers[i].id}"
                hamburguername="${hamburgers[i].name}"
                onClick="selectHamburguer(this.id)"
                />
            <label for="${hamburgers[i].id}">${hamburgers[i].name} (R$${hamburgers[i].price.toFixed(2)})</label>
        `
    }

    for (let i = 0; i < salads.length; i++) {
        saladForm.innerHTML += `
            <input
                type="radio"
                name="salad"
                value="${salads[i].price}"
                id="${salads[i].id}"
                saladname="${salads[i].name}"
                onClick="selectSalad(this.id)"
                />
            <label for="${salads[i].id}">${salads[i].name} (R$${salads[i].price.toFixed(2)})</label>
        `
    }

    for (let i = 0; i < cheeses.length; i++) {
        cheeseForm.innerHTML += `
            <input
                type="radio"
                name="cheese"
                value="${cheeses[i].price}"
                id="${cheeses[i].id}"
                cheesename="${cheeses[i].name}"
                onClick="selectCheese(this.id)"
                />
            <label for="${cheeses[i].id}">${cheeses[i].name} (R$${cheeses[i].price.toFixed(2)})</label>
        `
    }

}

loadPage()

function selectBread(breadId) {
    const selectedBread = breads.filter((item) => item.id == breadId)[0]

    order.breadPrice = selectedBread.price
    order.breadName = selectedBread.name
}

function selectHamburguer(hamburgerId) {
    const selectedHamburger = hamburgers.filter((item) => item.id == hamburgerId)[0]

    order.hamburguerPrice = selectedHamburger.price
    order.hamburguerName = selectedHamburger.name
}

function selectSalad(saladId) {
    const selectedSalad = salads.filter((item) => item.id == saladId)[0]

    order.saladPrice = selectedSalad.price
    order.saladName = selectedSalad.name
}

function selectCheese(cheeseId) {
    const selectedCheese = cheeses.filter((item) => item.id == cheeseId)[0]

    order.cheesePrice = selectedCheese.price
    order.cheeseName = selectedCheese.name
}

const btnShowCart = document.querySelector('#btnShowCart');
btnShowCart.innerHTML = "Finalizar"
btnShowCart.onclick = function () { ShowRequest() };

const printRequest = document.querySelector('#hamburguer-request');
const bkgPrintRequest = document.querySelector('#background-hamburguer-request');

function ShowRequest() {

    populateRequest();

    bkgPrintRequest.style.display = "block";
    bkgPrintRequest.style.visibility = "visible";
    bkgPrintRequest.style.opacity = "1";
}

function removeRequestScreen() {

    removeAllChildNodes(printRequest);

    bkgPrintRequest.style.visibility = "hidden";
    bkgPrintRequest.style.opacity = "0";
    document.querySelector('body').style = "overflow-y: visible;";
    window.scrollTo(0, 0);

}

// To remove all element childs of a node
function removeAllChildNodes(parent) {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);

    }

}

function populateRequest() {

    let totalPrice = 0;

    printRequest.innerHTML = `<h1>Pedido:</h1>`;
    printRequest.innerHTML += '<img src="../images/aula-25-11/hamburguer.png"/>';

    const orderKeys = Object.keys(order)

    for (let i = 0; i < orderKeys.length; i++) {
        if (typeof order[orderKeys[i]] === "number") {
            totalPrice += order[orderKeys[i]]
        }
    }

    printRequest.innerHTML += `<p>${order.breadName} - R$${order.breadPrice.toFixed(2)}</p>`
    printRequest.innerHTML += `<p>${order.hamburguerName} - R$${order.hamburguerPrice.toFixed(2)}</p>`
    printRequest.innerHTML += `<p>${order.saladName} - R$${order.saladPrice.toFixed(2)}</p>`
    printRequest.innerHTML += `<p>${order.cheeseName} - R$${order.cheesePrice.toFixed(2)}</p>`

    printRequest.innerHTML += `<p style="color: #EF233C;">Valor total: R$ ${totalPrice}</p>`;
    printRequest.innerHTML += `<button onclick="removeRequestScreen()">Confirmar</button>`;
    document.querySelector('body').style = "overflow-y: hidden;";

}