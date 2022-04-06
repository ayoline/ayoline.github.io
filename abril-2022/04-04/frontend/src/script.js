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


// const btnAddGame = document.querySelector('#btn-add-game');
// btnAddGame.onclick = function () { showForms('add') };

// const inputAddGame = document.querySelector('#add-game-input');
// const inputAddYear = document.querySelector('#add-year-input');
// const inputAddGenre = document.querySelector('#add-genre-input');
// const inputAddMultiplayer = document.querySelector('#add-multiplayer-input');
// const inputAddOffline = document.querySelector('#add-offline-input');
// const inputAddCrossplataform = document.querySelector('#add-crossplataform-input');
// const bgPage = document.querySelector('#table-box');

// const btnAddConfirm = document.querySelector('#btn-add-confirm')
// btnAddConfirm.onclick = function () {
//     if (inputAddGame.value && inputAddYear.value && inputAddGenre.value) {
//         saveNewGame();
//     } else {
//         alert('Please fill in all fields!');
//     }
// }
// const btnCloseAddForms = document.querySelector('#btn-in-close-add-forms');
// btnCloseAddForms.innerHTML = "X";
// btnCloseAddForms.onclick = function () { closeForms('add') }

// const addGameForms = document.querySelector('#add-game-forms');

// const inputUpdateId = document.querySelector('#update-id-input');
// const inputUpdateGame = document.querySelector('#update-game-input');
// const inputUpdateYear = document.querySelector('#update-year-input');
// const inputUpdateGenre = document.querySelector('#update-genre-input');
// const inputUpdateMultiplayer = document.querySelector('#update-multiplayer-input');
// const inputUpdateOffline = document.querySelector('#update-offline-input');
// const inputUpdateCrossplataform = document.querySelector('#update-crossplataform-input');

// const btnCloseUpdateForms = document.querySelector('#btn-in-close-update-forms');
// btnCloseUpdateForms.innerHTML = "X";
// btnCloseUpdateForms.onclick = function () { closeForms('update') }

// const updateGameForms = document.querySelector('#update-game-forms');

// function saveNewGame() {
//     const element = {};

//     element.game = inputAddGame.value;
//     element.year = inputAddYear.value;
//     element.genre = inputAddGenre.value;
//     element.multiplayer = inputAddMultiplayer.checked;
//     element.offline = inputAddOffline.checked;
//     element.crossplataform = inputAddCrossplataform.checked;

//     saveGameOnServer(element);
// }

// function saveGameOnServer(_element) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(_element)
//     };

//     fetch(apiUrl + '/save/savedata', requestOptions).then(resp => resp.text()).then(el => {
//         el = JSON.parse(el);
//         console.log(el);
//         if (!el.error) {
//             const addedGame = [];

//             closeForms('add');
//             addedGame.push(el)
//             loadFilteredTable(addedGame);
//         } else {
//             console.log(el.error);
//         }
//     });
// }

// function loadTableOrderById() {
//     fetch(apiUrl + `/order/order?value=${'order'}`).then(resp => resp.text()).then(element => {
//         element = JSON.parse(element);

//         loadFilteredTable(element);
//     });
// }

// function editGameById(_gameToBeUpdated) {
//     const id = _gameToBeUpdated;

//     fetch(apiUrl + `/order/order?value=${id}`).then(resp => resp.text()).then(element => {
//         element = JSON.parse(element);
//         const el = element[0];
//         showForms('update');

//         inputUpdateId.value = el.id;
//         inputUpdateId.disabled = true;
//         inputUpdateGame.value = el.game;
//         inputUpdateYear.value = el.year;
//         inputUpdateGenre.value = el.genre;
//         inputUpdateMultiplayer.checked = el.multiplayer;
//         inputUpdateOffline.checked = el.offline;
//         inputUpdateCrossplataform.checked = el.crossplataform;
//     });
// }

// const btnUpdateConfirm = document.querySelector('#btn-update-confirm');
// btnUpdateConfirm.onclick = function () {
//     if (inputUpdateGame.value && inputUpdateYear.value && inputUpdateGenre.value) {
//         const gameToBeUpdated =
//         {
//             'id': inputUpdateId.value,
//             'game': inputUpdateGame.value,
//             'year': inputUpdateYear.value,
//             'genre': inputUpdateGenre.value,
//             'multiplayer': inputUpdateMultiplayer.checked,
//             'offline': inputUpdateOffline.checked,
//             'crossplataform': inputUpdateCrossplataform.checked
//         };
//         updateGameOnServer(gameToBeUpdated);
//     } else {
//         alert('Please fill in all fields!');
//     }
// }

// function updateGameOnServer(_gameToBeUpdated) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(_gameToBeUpdated)
//     };

//     fetch(apiUrl + '/update/updatedata', requestOptions).then(resp => resp.text()).then(el => {
//         el = JSON.parse(el);
//         if (!el.error) {
//             alert(`Game ID ${el} has been Updated!`);
//             closeForms('update');
//             loadTableOrderById();
//         } else {
//             console.log(el.error);
//         }
//     });
// }

// function deleteGameById(_gameToBeDeleted) {
//     const id = _gameToBeDeleted;

//     const requestOptions = {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id: id })
//     };

//     fetch(apiUrl + '/delete/deletedata', requestOptions).then(resp => resp.text()).then(el => {
//         el = JSON.parse(el);
//         if (!el.error) {
//             alert(`Game ${el.game} has been deleted!`);
//             loadTableOrderById();
//         } else {
//             console.log(el.error);
//         }
//     });
// }
