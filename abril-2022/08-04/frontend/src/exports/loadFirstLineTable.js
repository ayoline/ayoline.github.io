const loadFirstLineTable = () => {
    document.querySelector("#table").innerHTML = `
    <tr>
        <th>Full Name</th>
        <th>User Name</th>
        <th>User Type</th>
    </tr>
    `;
}

export default loadFirstLineTable;