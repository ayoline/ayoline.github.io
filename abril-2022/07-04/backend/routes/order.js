const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/order', function (req, res) {
    const value = req.query.value;
    const events = JSON.parse(fs.readFileSync('data/events.json', 'utf8'));

    if (value === 'order') {
        events.sort(
            (a, b) => Number(a.id) > Number(b.id) ? 1 : -1
        );
        filteredResponse(events, res);
    } else {
        const filtered = events.filter((element) => {
            return element.id === Number(value);
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