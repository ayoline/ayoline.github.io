const express = require('express');
const router = express.Router();
const fs = require('fs');
router.use(express.json());

router.delete('/deletedata', function (req, res) {
    const EventID = Number(req.body.id);

    if (EventID) {
        const events = JSON.parse(fs.readFileSync('data/events.json', 'utf8'));
        const eventToBeDeleted = events.find((el) => el.id === EventID);

        if (eventToBeDeleted) {
            const eventToBeDeletedIndex = events.indexOf(eventToBeDeleted);
            events.splice(eventToBeDeletedIndex, 1);

            fs.writeFile('data/events.json', JSON.stringify(events), function (err) {
                if (!err) {
                    res.json(eventToBeDeleted);
                    console.log(eventToBeDeleted)
                } else {
                    console.log('Error: ' + err);
                    res.send(err);
                }
            });
        }
    }
});

module.exports = router;