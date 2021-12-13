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

const btnOrderList = document.querySelector('#btn-order-list-in-invoice-tables');
btnOrderList.innerHTML = "Ordenar Notas";
btnOrderList.onclick = function () { orderList() };

loadFirstLineTable();

const btnCalculateTax = document.querySelector('#btn-in-invoice-tables');
btnCalculateTax.innerHTML = "Calcular juros"
btnCalculateTax.onclick = function () { calculateInvoiceTax() };

const invoicesList = [];
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
        element.totalValue = inputValue.value;
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
    populateTableList();
}

function orderList() {

}

function populateTableList() {
    invoicesList.map(function (element) {
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