const config = require('../config');
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    jwt.verify(req.cookies.cookieToken, config.secret, function (err, decoded) {

        if (err) {
            return res.status(403).send({ error: 'Not Authenticated' });
        } else {
            res.locals.username = decoded.username;
            console.log(res.locals.username)
            next()
        }
    });
}

module.exports = verifyJWT;