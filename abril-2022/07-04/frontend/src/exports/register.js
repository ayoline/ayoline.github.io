import login from './login.js';

const register = (_userData) => {
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

    fetch(apiUrl + '/register/register', requestOptions).then(resp => resp.text()).then(el => {
        el = JSON.parse(el);

        if (!el.error) {
            alert(el.success);
            location.href = '../index.html';
            login(_userData);
        } else {
            alert(el.error);
        }
    });
}

export default register;