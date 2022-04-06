const express = require('express');
const router = express.Router();
const fs = require('fs');
router.use(express.json());

router.post('/register', function (req, res) {
    const userData = req.body;
    if (!userData.name || !userData.password) return res.send({ error: 'Username or password not informed!' });

    const jsonUsers = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
    const userFromJson = jsonUsers.find((el) => el.name === userData.name);

    if (userFromJson) return res.send({ error: 'User already exists!' });

    jsonUsers.push(userData);
    fs.writeFile('data/users.json', JSON.stringify(jsonUsers), function (err) {
        if (!err) {
            return res.send({ success: 'The user ' + userData.name + ' has been registered!' });
        } else {
            console.log('Error: ' + err);
            return res.send({ error: err });
        }
    });
});

module.exports = router