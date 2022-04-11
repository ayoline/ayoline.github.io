const express = require('express');
const router = express.Router();
const fs = require('fs');
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const cryptoJS = require('crypto-js');
const QRCode = require('qrcode');
router.use(express.json());

router.post('/qrcode', function (req, res) {
    const username = req.cookies.username;
    const eventID = req.body.id;

    // Creating the data
    const data = {
        username: username,
        event: eventID
    }

    const stringdata = JSON.stringify(data)

    console.log(stringdata);

    const cipherQrCode = cryptoJS.AES.encrypt(stringdata, 'S3gr3d0').toString();

    console.log(cipherQrCode)

    const generateQR = async text => {
        try {
            res.send({
                img: await QRCode.toDataURL(text),
                msg: cipherQrCode
            });
        } catch (err) {
            console.log(err);
        }
    }

    generateQR(cipherQrCode);
});

router.post('/read', function (req, res) {
    const ciphedQrCode = req.body.qrcode;
    const events = JSON.parse(fs.readFileSync('data/events.json', 'utf8'));

    // Decrypt QRCODE
    let bytes = cryptoJS.AES.decrypt(ciphedQrCode, 'S3gr3d0');
    let originalQrCode = bytes.toString(cryptoJS.enc.Utf8);
    const JsonQrCode = JSON.parse(originalQrCode);

    // Decrypt Username
    bytes = cryptoJS.AES.decrypt(JsonQrCode.username, 'S3gr3d0');
    const usernameDecrypted = bytes.toString(cryptoJS.enc.Utf8);

    console.log(JsonQrCode.event)
    const eventToBeUpdated = events.find((el) => el.id === Number(JsonQrCode.event));
    console.log(eventToBeUpdated);

    if (eventToBeUpdated) {
        const insideUser = eventToBeUpdated.inside.find(element => element === usernameDecrypted);

        if (!insideUser) {
            const eventToBeUpdatedIndex = events.indexOf(eventToBeUpdated);
            events[eventToBeUpdatedIndex].inside.push(usernameDecrypted);

            fs.writeFile('data/events.json', JSON.stringify(events), function (err) {
                if (!err) {
                    res.send(JsonQrCode);
                } else {
                    console.log('Error: ' + err);
                    res.send(err);
                }
            });
        } else {
            res.send({ error: "The user is already in." });
        }
    } else {
        res.send({ error: "The event was not found" });
    }
});

module.exports = router