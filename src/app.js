const express = require('express');
require('dotenv').config()

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.json());

app.get('/', (req, res) => {
    res.render('./pages/index');
});

module.exports = app;
