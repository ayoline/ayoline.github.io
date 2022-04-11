const apiUrl = 'http://localhost:3000';

import login from './exports/login.js';
import getCookies from './exports/getCookies.js';
import logAdminOrUser from './exports/logAdminOrUser.js';

const inputUserName = document.querySelector('#input-username');
const inputPassword = document.querySelector('#input-password');

logAdminOrUser();
getCookies();

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