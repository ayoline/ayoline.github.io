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

document.querySelector('#name-in-board h3').innerHTML = "Nome";
document.querySelector('#date-in-board h3').innerHTML = "Vencimento";
document.querySelector('#value-in-board h3').innerHTML = "Valor";
document.querySelector('#tax-in-board h3').innerHTML = "Juros(%)";
document.querySelector('#tax-value-in-board h3').innerHTML = "Juros(R$)";
document.querySelector('#total-value-in-board h3').innerHTML = "Total";

const btnCalculateTax = document.querySelector('#btn-in-invoice-tables');
btnCalculateTax.innerHTML = "Calcular juros"
btnCalculateTax.onclick = function () { calculateInvoiceTax() };

const invoicesList = [];
const invoicesTax = [];

function saveInvoice() {
    if (inputName.value.length > 0 && inputDate.value.length > 0 && inputValue.value.length > 0) {
        const element = {};
        element.name = inputName.value;
        element.date = new Date(inputDate.value);
        element.value = inputValue.value;
        element.tax = 0;
        element.taxValue = 0;
        element.totalValue = 0;
        invoicesList.push(element);

        console.log(invoicesList);

        const dd = String(element.date.getDate()).padStart(2, '0');
        const mm = String(element.date.getMonth() + 1).padStart(2, '0');
        const yyyy = element.date.getFullYear();
        const dateFormated = dd + '/' + mm + '/' + yyyy;

        document.querySelector('#name-in-board').innerHTML += `<p>${element.name}</p>`;
        document.querySelector('#date-in-board').innerHTML += `<p>${dateFormated}</p>`;
        document.querySelector('#value-in-board').innerHTML += `<p>R$ ${element.value}</p>`;

        cleanForms();

    } else {
        alert("Complete todos os campos!");
    }
}

function cleanForms() {
    inputName.value = "";
    inputDate.value = "";
    inputValue.value = "";
}

function calculateInvoiceTax() {
    const today = new Date();
    for (let i = 0; i < invoicesList.length; i++) {
        const invoiceDate = new Date(invoicesList[i].date);
        const Difference_In_Time = today.getTime() - invoiceDate.getTime();
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        console.log(Difference_In_Days.toFixed(0));

        if (invoiceDate.getTime() === today.getTime()) {
            console.log("true");
        }

    }
}