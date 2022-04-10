import loadTableOrderById from './loadAdminDashboard';

const deleteEventByID = (_eventToBeDeleted) => {
    const apiUrl = 'http://localhost:3000';
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
            alert(`Game ${el.game} has been deleted!`);
            loadTableOrderById();
        } else {
            console.log(el.error);
        }
    });
}

export default deleteEventByID;