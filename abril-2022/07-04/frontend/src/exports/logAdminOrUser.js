import loadUserDashboard from './loadUserDashboard.js';
import loadAdminDashboard from './loadAdminDashboard.js'

const apiUrl = 'http://localhost:3000';

const logAdminOrUser = () => {
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
            if (el.userpermission === '0') {
                loadUserDashboard();
            } else if (el.userpermission === '1') {
                loadAdminDashboard();
            }
        } else {
            console.log(el.error);
        }
    });
}

export default logAdminOrUser;