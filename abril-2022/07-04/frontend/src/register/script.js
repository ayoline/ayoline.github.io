import register from '../exports/register.js';

const inputFullName = document.querySelector('#input-fullname');
const inputUserName = document.querySelector('#input-username');
const inputPassword = document.querySelector('#input-password');
const customSelector = document.querySelector('#custom-selector');
const btnRegister = document.querySelector('#btn-register');
const btnBackToLogin = document.querySelector('#btn-back-to-login');

btnRegister.onclick = function () {

    const userObj = {};
    userObj.fullname = inputFullName.value;
    userObj.username = inputUserName.value;
    userObj.password = inputPassword.value;
    userObj.userpermission = customSelector.value;

    register(userObj);

}

btnBackToLogin.onclick = function () {
    location.href = '../index.html';
}