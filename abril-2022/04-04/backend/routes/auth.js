const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const fs = require('fs');
const bcrypt = require('bcryptjs');
const cryptoJS = require("crypto-js");
router.use(express.json());

router.post('/login', async (req, res) => {
    const userData = req.body;
    if (!userData.name || !userData.password) return res.send({ error: 'Username or password not informed!' });
    const jsonUsers = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
    const userFromJson = jsonUsers.find((el) => el.name === userData.name);

    if (userFromJson) {

        // Decrypt
        const bytes = cryptoJS.AES.decrypt(userFromJson.password, 'S3gr3d0');
        const originalHashedPassword = bytes.toString(cryptoJS.enc.Utf8);

        try {
            if (await bcrypt.compare(userData.password, originalHashedPassword)) {

                // setting cookies
                // Encrypt
                const cipherCookie = cryptoJS.AES.encrypt(userFromJson.name, 'S3gr3d0').toString();

                res.cookie(
                    'username',
                    cipherCookie,
                    {
                        maxAge: 900000,
                        httpOnly: true
                    }

                );
                return res.send({ success: 'The user ' + userFromJson.name + ' has been logged in!' });
            } else {
                return res.send({ error: 'wrong password!' });
            }
        } catch (error) {
            return (error);
        }
    } else {
        return res.send({ error: 'user not found!' });
    }
});

router.get('/getcookie', function (req, res) {
    const username = req.cookies.username;

    // Decrypt
    const bytes = cryptoJS.AES.decrypt(username, 'S3gr3d0');
    const usernameDecrypted = bytes.toString(cryptoJS.enc.Utf8);

    const jsonUsers = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
    const userFromJson = jsonUsers.find((el) => el.name === usernameDecrypted);

    if (userFromJson) {
        console.log('Session ID exists');
        return res.send({ success: userFromJson.name });
    } else res.status(403).send({ error: 'Not Authenticated' });
});

module.exports = router
