const dotenv = require('dotenv');
dotenv.config();
const config = {
    secret: process.env.ACCESS_TOKEN_SECRET,
    refresh: process.env.REFRESH_TOKEN_SECRET,
    crypto: process.env.SECRET_CRYPTO
};

module.exports = config;