import loadFirstLineTable from './loadFirstLineTable.js';

const apiUrl = 'http://localhost:3000';

const loadUserDashboard = () => {
    const dashboardTitle = document.querySelector('#table-in-table-box');
    dashboardTitle.innerHTML = `<H1>User Dashboard</h1>`;

    fetch(apiUrl + `/order/order?value=${'order'}`).then(resp => resp.text()).then(element => {
        element = JSON.parse(element);

        loadUsersTable(element);
    });
}

function loadUsersTable(_element) {
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

export default loadUserDashboard;