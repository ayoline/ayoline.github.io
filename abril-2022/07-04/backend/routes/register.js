const express = require('express');
const router = express.Router();
const fs = require('fs');
const bcrypt = require('bcryptjs');
const cryptoJS = require("crypto-js");
router.use(express.json());

router.post('/register', async (req, res) => {
    const userData = req.body;
    if (!userData.fullname || !userData.username || !userData.password) return res.send({ error: 'Please fill in all fields.' });

    const jsonUsers = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
    const userFromJson = jsonUsers.find((el) => el.username === userData.username);

    if (userFromJson) return res.send({ error: 'User already exists!' });

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Encrypt
    const cipherPassword = cryptoJS.AES.encrypt(hashedPassword, 'S3gr3d0').toString();

    userData.password = cipherPassword;

    jsonUsers.push(userData);
    fs.writeFile('data/users.json', JSON.stringify(jsonUsers), function (err) {
        if (!err) {
            return res.send({ success: 'The user ' + userData.fullname + ' has been registered!' });
        } else {
            console.log('Error: ' + err);
            return res.send({ error: err });
        }
    });
});

module.exports = router