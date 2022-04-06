const apiUrl = 'http://localhost:3000'

const inputName = document.querySelector('#input-name');
const inputPassword = document.querySelector('#input-password');
const welcomeMsg = document.querySelector('#session-authorized');

getCookies();

const btnLogin = document.querySelector('#btn-login');
btnLogin.onclick = function () {
    const userObj = {};
    userObj.name = inputName.value;
    userObj.password = inputPassword.value;

    login(userObj);

    inputName.value = '';
    inputPassword.value = '';
}

const btnRegister = document.querySelector('#btn-register');
btnRegister.onclick = function () {
    const userObj = {};
    userObj.name = inputName.value;
    userObj.password = inputPassword.value;

    register(userObj);

    inputName.value = '';
    inputPassword.value = '';
}

function login(_userData) {
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

    fetch(apiUrl + '/auth/login', requestOptions).then(resp => resp.text()).then(el => {
        el = JSON.parse(el);

        if (!el.error) {
            alert(el.success);
            getCookies();
        } else {
            alert(el.error);
        }
    });
}

function register(_userData) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_userData)
    };

    fetch(apiUrl + '/register/register', requestOptions).then(resp => resp.text()).then(el => {
        el = JSON.parse(el);

        if (!el.error) {
            alert(el.success);
        } else {
            alert(el.error);
        }
    });
}

function getCookies() {
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3001',
            'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
    };

    fetch(apiUrl + '/auth/getcookie', requestOptions).then(resp => resp.text()).then(el => {
        el = JSON.parse(el);

        if (!el.error) {
            welcomeMsg.style.display = "flex";
            welcomeMsg.innerHTML = `Olá, ${el.success}`
            console.log(el.success);
        } else {
            console.log(el.error);
        }
    });
}