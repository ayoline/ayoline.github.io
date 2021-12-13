document.querySelector('main h1').innerHTML = "Calculadora de Juros da Joana";

document.querySelectorAll('#main-box-register-invoice h3')[0].innerHTML = "Nome do cliente:"
const inputName = document.querySelector('#input-name-in-register');
inputName.type = "text";

document.querySelectorAll('#main-box-register-invoice h3')[1].innerHTML = "Data do vencimento:"
const inputDate = document.querySelector('#input-date-in-register');
inputDate.type = "date";

document.querySelectorAll('#main-box-register-invoice h3')[2].innerHTML = "Valor:"
const inputValue = document.querySelector('#input-value-in-register');
inputValue.type = "number";

const btnSaveInvoice = document.querySelector('#btn-in-register-invoice');
btnSaveInvoice.innerHTML = "Salvar";
btnSaveInvoice.onclick = function () { saveInvoice() };

const btnOrderByDate = document.querySelector('#btn-order-list-date-in-invoice-tables');
btnOrderByDate.innerHTML = "Ordenar por Data";
btnOrderByDate.onclick = function () { orderListByDate(invoicesList) };

const btnOrderByName = document.querySelector('#btn-order-list-name-in-invoice-tables');
btnOrderByName.innerHTML = "Ordernar por nome";
btnOrderByName.onclick = function () { orderListByName(invoicesList) };

loadFirstLineTable();

const btnCalculateTax = document.querySelector('#btn-in-invoice-tables');
btnCalculateTax.innerHTML = "Calcular juros"
btnCalculateTax.onclick = function () { calculateInvoiceTax() };

const sumTotalValue = document.querySelector('#buttons-in-invoice-tables p');
sumTotalValue.innerHTML = `<p style="color: #3476FB; font-weight: bold;">Valor total das notas:</p>`;

const invoicesList = [];
let invoiceOrderListByDate = [];
let invoiceOrderListByName = [];
const MORA = 2;
const TAX_BY_DAY = 0.1;

function saveInvoice() {
    if (inputName.value.length > 0 && inputDate.value.length > 0 && inputValue.value.length > 0) {
        const element = {};
        element.name = inputName.value;
        element.date = new Date(inputDate.value);
        element.value = parseFloat(inputValue.value).toFixed(2);
        element.tax = 0;
        element.taxValue = 0;
        element.totalValue = parseFloat(inputValue.value).toFixed(2);
        invoicesList.push(element);

        const dateFormated = getFormatedDate(element.date);

        document.querySelector('#name-in-board').innerHTML += `<p>${element.name}</p>`;
        document.querySelector('#date-in-board').innerHTML += `<p>${dateFormated}</p>`;
        document.querySelector('#value-in-board').innerHTML += `<p>R$ ${element.value}</p>`;

        cleanForms();
    } else {
        alert("Complete todos os campos!");
    }
}

function getFormatedDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    const dateFormated = dd + '/' + mm + '/' + yyyy;
    return dateFormated;
}

function calculateInvoiceTax() {
    const today = new Date();
    for (let i = 0; i < invoicesList.length; i++) {
        const invoiceDate = new Date(invoicesList[i].date);
        const differenceInTime = today.getTime() - invoiceDate.getTime();
        const differenceInDays = (differenceInTime / (1000 * 3600 * 24)).toFixed(0);

        if (differenceInDays > 0 && invoicesList[i].tax == 0) {
            let tax = (MORA + (TAX_BY_DAY * differenceInDays)).toFixed(2);
            let taxValue = ((invoicesList[i].value * tax) / 100).toFixed(2);

            invoicesList[i].tax = tax;
            invoicesList[i].taxValue = taxValue;
            invoicesList[i].totalValue = (parseFloat(taxValue) + parseFloat(invoicesList[i].value)).toFixed(2);
        }
    }

    loadFirstLineTable();
    populateTableList(invoicesList);

    sumTotal(invoicesList);
}

function sumTotal(el) {
    var initValue = 0;
    var sum = el.reduce(function (accumulator, currentValue) {
        return (parseFloat(accumulator) + parseFloat(currentValue.totalValue)).toFixed(2);
    }, initValue)

    sumTotalValue.innerHTML = `<p style="color: #3476FB;  font-weight: bold;">Valor total das notas: ${sum}</p>`;
}

function orderListByDate(element) {
    invoiceOrderListByDate = element.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    loadFirstLineTable();
    populateTableList(invoiceOrderListByDate);
}

function orderListByName(element) {
    function compare(a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }
        return comparison;
    }
    invoiceOrderListByName = element.sort(compare);
    loadFirstLineTable();
    populateTableList(invoiceOrderListByName);
}

function populateTableList(list) {
    list.map(function (element) {
        document.querySelector('#name-in-board').innerHTML += `<p>${element.name}</p>`;
        document.querySelector('#date-in-board').innerHTML += `<p>${getFormatedDate(element.date)}</p>`;
        document.querySelector('#value-in-board').innerHTML += `<p>R$ ${element.value}</p>`;
        document.querySelector('#tax-in-board').innerHTML += `<p>${element.tax}%</p>`;
        document.querySelector('#tax-value-in-board').innerHTML += `<p>R$ ${element.taxValue}</p>`;
        document.querySelector('#total-value-in-board').innerHTML += `<p>R$ ${element.totalValue}</p>`;
    })
}

function loadFirstLineTable() {
    document.querySelector('#name-in-board').innerHTML = `<h3>Nome</h3>`;
    document.querySelector('#date-in-board').innerHTML = `<h3>Vencimento</h3>`;
    document.querySelector('#value-in-board').innerHTML = `<h3>Valor</h3>`;
    document.querySelector('#tax-in-board').innerHTML = `<h3>Juros(%)</h3>`;
    document.querySelector('#tax-value-in-board').innerHTML = `<h3>Juros(R$)</h3>`;
    document.querySelector('#total-value-in-board').innerHTML = `<h3>Total</h3>`;
}

function cleanForms() {
    inputName.value = "";
    inputDate.value = "";
    inputValue.value = "";
}