const loadFirstLineTable = () => {
    document.querySelector("#table").innerHTML = `
    <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
        <th>Time</th>
        <th>Delete</th>
    </tr>
    `;
}

export default loadFirstLineTable;