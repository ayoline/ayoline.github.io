import loadFirstLineTable from './loadFirstLineTable.js';

const apiUrl = 'http://localhost:3000';

const loadUserDashboard = () => {
    const dashboardTitle = document.querySelector('#table-in-table-box');
    dashboardTitle.innerHTML = `<H1>User Dashboard</h1>`;

    fetch(apiUrl + `/order/order?value=${'order'}`).then(resp => resp.text()).then(element => {
        element = JSON.parse(element);

        loadEventsForUsers(element);
    });
}

function loadEventsForUsers(_element) {
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
                <td><input class="btn-gen-qrcode" id="${el.id}" style="  color: green; font-weight: bold;" type="button" value="QR CODE"></td>
            </tr>
            `;
        }
        const btnGenQrCode = document.querySelectorAll(".btn-gen-qrcode");
        Array.from(btnGenQrCode).forEach(el =>
            el.addEventListener("click", () => generateQrCode(el.id))
        )
    } else {
        errorMsg(_element.msg);
    }
}

function generateQrCode(_eventID) {
    const eventID = _eventID;

    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3001',
            'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
        body: JSON.stringify({ id: eventID }),
    };

    fetch(apiUrl + '/qrcode/qrcode', requestOptions).then(resp => resp.text()).then(el => {
        el = JSON.parse(el);

        if (!el.error) {
            openQrCodeModal(el);
        } else {
            console.log(el.error);
        }
    });
}

function openQrCodeModal(_el) {
    const qrCodeModal = document.querySelector('#qr-code');
    console.log(_el.msg);

    qrCodeModal.innerHTML = `
                            <div id="close-qr-modal">
                                <p id="btn-in-close-qr-modal"></p>
                            </div>
                            <img src="${_el.img}" width="200px" height="200px">
    `;

    qrCodeModal.style.display = "block";
    qrCodeModal.style.visibility = "visible";
    qrCodeModal.style.opacity = "1";

    const btnCloseQrModal = document.querySelector('#btn-in-close-qr-modal');
    btnCloseQrModal.innerHTML = "X";
    btnCloseQrModal.onclick = function () { closeQrCodeModal(); }
}

function closeQrCodeModal() {
    const qrCodeModal = document.querySelector('#qr-code');
    qrCodeModal.innerHTML = ``;
}

export default loadUserDashboard;