import loadFirstLineTable from './loadFirstLineTable.js';

const apiUrl = 'http://localhost:3000';

const loadAdminDashboard = () => {
    const dashboardTitle = document.querySelector('#table-in-table-box');
    dashboardTitle.innerHTML = `<H1>Admin Dashboard</h1>`;

    loadUsersTable();
}

function loadUsersTable() {
    document.querySelector('.btn-add-user').innerHTML = `
            <button id="btn-add-user">Add User</button>
        `;

    const btnCreateEvent = document.querySelector('#btn-add-user');
    btnCreateEvent.addEventListener("click", function () {
        formToAddUser();
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
                <td>${el.fullname}</td>
                <td>${el.username}</td>
                <td>${el.userType}</td>
            </tr>
            `;
        }
    } else {
        errorMsg(_element.msg);
    }
}

function showForms() {
    const bgPage = document.querySelector('#table-box');
    const addUserForms = document.querySelector('#add-user-forms');

    bgPage.style.filter = 'blur(8px)';
    addUserForms.style.display = "block";
    addUserForms.style.visibility = "visible";
    addUserForms.style.opacity = "1";
}

function closeForms() {
    const bgPage = document.querySelector('#table-box');
    const addUserForms = document.querySelector('#add-user-forms');

    bgPage.style.filter = '';
    addUserForms.style.visibility = "hidden";
    addUserForms.style.opacity = "0";
}

function formToAddUser() {
    const addUserForms = document.querySelector('#add-user-forms');
    addUserForms.innerHTML = `
                        <div id="add-forms">
                            <div id="close-add-forms">
                                <p id="btn-in-close-add-forms"></p>
                            </div>
                            <h3>Add an User:</h3>
                            <div class="inputs-in-add-user-forms">
                                <label for="add-fullname-input">fullname</label>
                                <input id="add-fullname-input" type="text" />
                            </div>
                            <div class="inputs-in-add-user-forms">
                                <label for="add-username-input">username</label>
                                <input id="add-username-input" type="text" />
                            </div>
                            <div class="inputs-in-add-user-forms">
                                <label for="add-password-input">password</label>
                                <input id="add-password-input" type="password" />
                            </div>
                            <button id="btn-add-confirm">Add</button>
                        </div>
                `;

    const inputAddFullname = document.querySelector('#add-fullname-input');
    const inputAddUsername = document.querySelector('#add-username-input');
    const inputAddPassword = document.querySelector('#add-password-input');

    const btnAddConfirm = document.querySelector('#btn-add-confirm');
    btnAddConfirm.addEventListener("click", function () {
        if (inputAddFullname.value && inputAddUsername.value && inputAddPassword.value) {
            const element = {};

            element.fullname = inputAddFullname.value;
            element.username = inputAddUsername.value;
            element.password = inputAddPassword.value;

            registerNewUser(element);
        } else {
            alert('Please fill in all fields!');
        }
    }, false);

    const btnCloseAddForms = document.querySelector('#btn-in-close-add-forms');
    btnCloseAddForms.innerHTML = "X";
    btnCloseAddForms.onclick = function () { closeForms(); }

    showForms();
}

function registerNewUser(_userData) {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3001',
            'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
        body: JSON.stringify(_userData)
    };

    fetch(apiUrl + '/register/register', requestOptions).then(resp => resp.text()).then(el => {
        el = JSON.parse(el);

        if (!el.error) {
            alert(el.success);
            closeForms();
            loadUsersTable();
        } else {
            alert(el.error);
        }
    });
}

export default loadAdminDashboard;