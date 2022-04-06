const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const fs = require('fs');
router.use(express.json());

router.post('/login', function (req, res) {
    const userData = req.body;
    if (!userData.name || !userData.password) return res.send({ error: 'Username or password not informed!' });
    const jsonUsers = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
    const userFromJson = jsonUsers.find((el) => el.name === userData.name);


    if (userFromJson) {
        if (userFromJson.password === userData.password) {
            // setting cookies
            res.cookie(
                'username',
                userFromJson.name,
                {
                    maxAge: 900000,
                    httpOnly: true
                }

            );
            return res.send({ success: 'The user ' + userFromJson.name + ' has been logged in!' });
        } else {
            return res.send({ error: 'wrong password!' });
        }
    } else {
        return res.send({ error: 'user not found!' });
    }
});

router.get('/getcookie', validateCookie, function (req, res) {
    const username = req.cookies.username;
    console.log(username);

    return res.send({ success: username });
});

function validateCookie(req, res, next) {
    const { cookies } = req;
    const jsonUsers = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));

    if ('username' in cookies) {
        console.log('Session ID exists');
        const userFromJson = jsonUsers.find((el) => el.name === cookies.username);
        if (userFromJson) next();
        else res.status(403).send({ error: 'Not Authenticated' });
    } else res.status(403).send({ error: 'Not Authenticated' });
}

module.exports = router
