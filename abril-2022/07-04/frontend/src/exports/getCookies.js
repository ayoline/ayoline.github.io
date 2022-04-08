const getCookies = () => {
    const apiUrl = 'http://localhost:3000';
    const welcomeMsg = document.querySelector('#session-authorized');

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

export default getCookies;