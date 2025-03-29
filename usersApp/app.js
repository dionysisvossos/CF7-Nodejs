const express = require('express');
const app = express();

const user = require('./routes/user.routes.js');

app.use(express.json());
app.use('/api/users', user);

module.exports = app;