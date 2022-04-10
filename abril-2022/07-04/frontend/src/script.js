const apiUrl = 'http://localhost:3000';

import login from './exports/login.js';
import getCookies from './exports/getCookies.js';

const inputUserName = document.querySelector('#input-username');
const inputPassword = document.querySelector('#input-password');

getCookies();

loadAdminDashboard();

const btnLogin = document.querySelector('#btn-login');
btnLogin.onclick = function () {
    const userObj = {};
    userObj.username = inputUserName.value;
    userObj.password = inputPassword.value;

    login(userObj);

    inputUserName.value = '';
    inputPassword.value = '';
}

const btnRegister = document.querySelector('#btn-register');
btnRegister.onclick = function () {
    location.href = '/register/index.html';
}

function deleteEventByID(_eventToBeDeleted) {
    const id = _eventToBeDeleted;

    const requestOptions = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3001',
            'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
        body: JSON.stringify({ id: id })
    };

    fetch(apiUrl + '/delete/deletedata', requestOptions).then(resp => resp.text()).then(el => {
        el = JSON.parse(el);
        if (!el.error) {
            //alert(`Event ${el.title} has been deleted!`);
            console.log('del')
            loadTableOrderById();
        } else {
            console.log(el.error);
        }
    });
}

function loadAdminDashboard() {
    document.querySelector('#table-in-table-box').innerHTML = `<H1>Admin Dashboard</h1>`;

    loadTableOrderById();

}

function loadTableOrderById() {
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
                <td><input class="teste" id="${el.id}" style="color: rgb(212, 16, 16); font-weight: bold;" type="button" value="X"></td>
            </tr>
            `;
        }
        const btnDel = document.querySelectorAll(".teste");
        Array.from(btnDel).forEach(el =>
            el.addEventListener("click", () => deleteEventByID(el.id))
        )
    } else {
        errorMsg(_element.msg);
    }
}

function loadFirstLineTable() {
    document.querySelector("#table").innerHTML = `
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
        <th>Time</th>
        <th>Delete</th>
    </tr>
    `;
}