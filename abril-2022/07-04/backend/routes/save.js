const express = require('express');
const router = express.Router();
router.use(express.json());
const fs = require('fs');

router.post('/savedata', function (req, res) {
    const eventData = req.body;
    const jsonEvents = JSON.parse(fs.readFileSync('data/events.json', 'utf8'));
    const lastEventId = JSON.parse(fs.readFileSync('data/lastEventId.json', 'utf8'));

    eventData.id = (lastEventId[0].lastid + 1);
    jsonEvents.push(eventData);

    fs.writeFile('data/events.json', JSON.stringify(jsonEvents), function (err) {
        if (!err) {
            res.json(eventData);
        } else {
            console.log('Erro: ' + err);
            res.send(err);
        }
    });

    lastEventId[0].lastid = eventData.id;
    fs.writeFile('data/lastEventId.json', JSON.stringify(lastEventId), function (err) {
        if (!err) {
            console.log(lastEventId);
        } else {
            console.log('Error: ' + err);
        }
    });
});

module.exports = router;