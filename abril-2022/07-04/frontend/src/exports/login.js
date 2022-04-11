import getCookies from './getCookies.js';

const login = (_userData) => {
    const apiUrl = 'http://localhost:3000';

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
            location.reload();
            alert(el.success);
            getCookies();
        } else {
            alert(el.error);
        }
    });
}

export default login;