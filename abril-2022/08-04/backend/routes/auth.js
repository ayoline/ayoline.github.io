const verifyJWT = require('../middlewares/verifyJWT.js')
const config = require('../config');
const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
router.use(cookieParser());
const fs = require('fs');
const bcrypt = require('bcryptjs');
const cryptoJS = require("crypto-js");
router.use(express.json());

router.post('/login', async (req, res) => {
    const userData = req.body;

    if (!userData.username || !userData.password) return res.send({ error: 'Username or password not informed!' });
    const jsonUsers = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
    const userFromJson = jsonUsers.find((el) => el.username === userData.username);

    if (userFromJson) {

        // Decrypt
        const bytes = cryptoJS.AES.decrypt(userFromJson.password, config.crypto);
        const originalHashedPassword = bytes.toString(cryptoJS.enc.Utf8);

        try {
            if (await bcrypt.compare(userData.password, originalHashedPassword)) {

                const token = jwt.sign({ username: userFromJson.username }, config.secret);

                // setting cookies
                res.cookie(
                    'cookieToken',
                    token,
                    {
                        maxAge: 900000,
                        httpOnly: true
                    }
                );
                return res.send({
                    success: 'The user ' + userFromJson.fullname + ' has been logged in!',
                });

            } else {
                return res.status(401).send({ error: 'wrong password!' });
            }
        } catch (error) {
            return (error);
        }
    } else {
        return res.send({ error: 'user not found!' });
    }
});

router.get('/getcookie', verifyJWT, function (req, res) {
    const username = res.locals.username;
    console.log(username)

    if (username) {
        try {
            const jsonUsers = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
            const userFromJson = jsonUsers.find((el) => el.username === username);

            if (userFromJson) {
                console.log('Session ID exists');
                return res.send({
                    success: userFromJson.fullname,
                    userType: userFromJson.userType
                });
            } else res.status(403).send({ error: 'Not Authenticated' });
        } catch (error) {
            console.log(error);
        }
    } else {
        return res.status(403).send({ error: 'Not Authenticated' });
    }

});

module.exports = router