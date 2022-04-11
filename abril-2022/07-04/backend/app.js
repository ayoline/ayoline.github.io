const port = 3000;
const express = require('express');
const app = express();
const cors = require('cors');
const auth = require('./routes/auth');
const register = require('./routes/register');
const deletedata = require('./routes/delete');
const order = require('./routes/order');
const save = require('./routes/save');
const qrcode = require('./routes/qrcode');

app.use(cors({
    origin: ["http://localhost:3001"],
    credentials: true
}));

app.use('/auth', auth);
app.use('/register', register);
app.use('/delete', deletedata);
app.use('/order', order);
app.use('/save', save);
app.use('/qrcode', qrcode);

app.listen(port, () => console.log(`BACKEND: listening on port: ${port}`));