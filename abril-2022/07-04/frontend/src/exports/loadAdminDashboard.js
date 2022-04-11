import deleteEventByID from './deleteEventByID.js';
import loadFirstLineTable from './loadFirstLineTable.js';

const apiUrl = 'http://localhost:3000';

const loadAdminDashboard = () => {
    const dashboardTitle = document.querySelector('#table-in-table-box');
    dashboardTitle.innerHTML = `<H1>Admin Dashboard</h1>`;

    loadQrCodeInput();
    loadTableOrderById();
}

function loadQrCodeInput() {
    const qrCodeBar = document.querySelector('#qr-bar');

    qrCodeBar.innerHTML = `
                            <input id="input-read-qr-code" type="text" placeholder="Read your QR Code Here!!!">
                            <button id="btn-read-qr-code">
                                READ
                            </button>
                        `;

    const inputReadQrCode = document.querySelector('#input-read-qr-code');
    const btnReadQrCode = document.querySelector('#btn-read-qr-code');
    btnReadQrCode.addEventListener("click", function () {
        readQrCodeHash(inputReadQrCode.value);
        inputReadQrCode.value = '';
    }, false);
}

function readQrCodeHash(_qrCode) {
    const QRcode = _qrCode;

    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3001',
            'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
        body: JSON.stringify({ qrcode: QRcode }),
    };

    fetch(apiUrl + '/qrcode/read', requestOptions).then(resp => resp.text()).then(el => {
        el = JSON.parse(el);

        if (!el.error) {
            alert("User released to enter!");
        } else {
            alert(el.error);
        }
    });
}

function loadTableOrderById() {
    document.querySelector('.btn-create-event').innerHTML = `
            <button id="btn-create-event">Cadastrar Evento</button>
        `;

    const btnCreateEvent = document.querySelector('#btn-create-event');
    btnCreateEvent.addEventListener("click", function () {
        formToCreateEvent();
    }, false);

    fetch(apiUrl + `/order/order?value=${'order'}`).then(resp => resp.text()).then(element => {
        element = JSON.parse(element);

        loadFilteredTable(element);
    });
}

function loadFilteredTable(_element) {
    loadFirstLineTable();

    if (!_element.error) {
        for (let i = 0; i < _element.length; i++) {
            const el = _element[i];

            document.querySelector("#table").innerHTML += `
            <tr>
                <td>${el.id}</td>
                <td>${el.title}</td>
                <td>${el.description}</td>
                <td>${el.date}</td>
                <td>${el.time}</td>
                <td><input class="btn-delete-event" id="${el.id}" style="color: rgb(212, 16, 16); font-weight: bold;" type="button" value="X"></td>
            </tr>
            `;
        }
        const btnDel = document.querySelectorAll(".btn-delete-event");
        Array.from(btnDel).forEach(el =>
            el.addEventListener("click", () => deleteEventByID(el.id))
        )
    } else {
        errorMsg(_element.msg);
    }
}

function showForms() {
    const bgPage = document.querySelector('#table-box');
    const addEventForms = document.querySelector('#add-event-forms');

    bgPage.style.filter = 'blur(8px)';
    addEventForms.style.display = "block";
    addEventForms.style.visibility = "visible";
    addEventForms.style.opacity = "1";
}

function closeForms() {
    const bgPage = document.querySelector('#table-box');
    const addEventForms = document.querySelector('#add-event-forms');

    bgPage.style.filter = '';
    addEventForms.style.visibility = "hidden";
    addEventForms.style.opacity = "0";
}

function formToCreateEvent() {
    const addEventForms = document.querySelector('#add-event-forms');
    addEventForms.innerHTML = `
                    <div id="add-forms">
                    <div id="close-add-forms">
                        <p id="btn-in-close-add-forms"></p>
                    </div>
                    <h3>Add an Event:</h3>
                    <div class="inputs-in-add-event-forms">
                        <label for="add-title-input">Title</label>
                        <input id="add-title-input" type="text" />
                    </div>
                    <div class="inputs-in-add-event-forms">
                        <label for="add-description-input">Description</label>
                        <input id="add-description-input" type="text" />
                    </div>
                    <div class="inputs-in-add-event-forms">
                        <label for="add-date-input">Date</label>
                        <input id="add-date-input" type="text" />
                    </div>
                    <div class="inputs-in-add-event-forms">
                        <label for="add-time-input">Time</label>
                        <input id="add-time-input" type="text" />
                    </div>
                    <button id="btn-add-confirm">Add</button>
                </div>`;

    const inputAddTitle = document.querySelector('#add-title-input');
    const inputAddDescription = document.querySelector('#add-description-input');
    const inputAddDate = document.querySelector('#add-date-input');
    const inputAddTime = document.querySelector('#add-time-input');

    const btnAddConfirm = document.querySelector('#btn-add-confirm');
    btnAddConfirm.addEventListener("click", function () {
        if (inputAddTitle.value && inputAddDescription.value && inputAddDate.value && inputAddTime.value) {
            const element = {};

            element.title = inputAddTitle.value;
            element.description = inputAddDescription.value;
            element.date = inputAddDate.value;
            element.time = inputAddTime.value;
            element.inside = [];

            saveNewEventOnServer(element);
        } else {
            alert('Please fill in all fields!');
        }
    }, false);

    const btnCloseAddForms = document.querySelector('#btn-in-close-add-forms');
    btnCloseAddForms.innerHTML = "X";
    btnCloseAddForms.onclick = function () { closeForms(); }

    showForms();
}

function saveNewEventOnServer(_eventData) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3001',
            'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
        body: JSON.stringify(_eventData)
    };

    fetch(apiUrl + '/save/savedata', requestOptions).then(resp => resp.text()).then(el => {
        el = JSON.parse(el);

        if (!el.error) {
            alert(`The event ${el.title} has been created!`);
            closeForms();
            loadTableOrderById();
        } else {
            alert(el.error);
        }
    });
}

export default loadAdminDashboard;