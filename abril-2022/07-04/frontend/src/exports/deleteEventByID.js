const apiUrl = 'http://localhost:3000';

import loadTableOrderById from './loadAdminDashboard.js';

const deleteEventByID = (_eventToBeDeleted) => {
    const id = _eventToBeDeleted;

    const requestOptions = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3001',
            'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
        body: JSON.stringify({ id: id })
    };

    fetch(apiUrl + '/delete/deletedata', requestOptions).then(resp => resp.text()).then(el => {
        el = JSON.parse(el);
        if (!el.error) {
            //alert(`Event ${el.title} has been deleted!`);
            console.log('del')
            loadTableOrderById();
        } else {
            console.log(el.error);
        }
    });
}

export default deleteEventByID;