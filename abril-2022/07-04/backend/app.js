const port = 3000;
const express = require('express');
const app = express();
const cors = require('cors');
const auth = require('./routes/auth');
const register = require('./routes/register');

app.use(cors({
    origin: ["http://localhost:3001"],
    credentials: true
}));

app.use('/auth', auth);
app.use('/register', register);


app.listen(port, () => console.log(`BACKEND: listening on port: ${port}`));