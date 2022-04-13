const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/order', function (req, res) {
    const value = req.query.value;
    const users = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));

    if (value === 'order') {
        users.sort(
            (a, b) => a.userType > b.userType ? 1 : -1
        );
        filteredResponse(users, res);
    } else {
        const filtered = users.filter((element) => {
            return element.userType === value;
        });
        filteredResponse(filtered, res);
    }
});

function filteredResponse(filteredJSON, res) {
    if (filteredJSON.length > 0) {
        res.json(filteredJSON);
    } else {
        res.send({ error: "NENHUM EVENTO ENCONTRADO" });
    }
}

module.exports = router