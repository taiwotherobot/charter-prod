const express = require('express');
const api = require('./routes/api')
require('dotenv').config()

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.json());

app.get('/', (req, res) => {
    res.render('./pages/index');
});

app.get('/shows', async function (req, res) {
    if (req.query.network_id) {
        await api.getShowByNetwork(req, res);
    } else if (req.query.package_id) {
        await api.getShowByPackageId(req, res);
    }
    else {
        await api.getAllShows(req, res);
    }
});
app.get('/packages', api.getAllPackages)
app.get('/packages/:id', api.getPackageById)
app.get('/shows/:id', api.getShowById);
app.post('/shows', api.createShow);
app.put('/shows/:id', api.updateShow);
app.delete('/shows/:id', api.deleteShow);

module.exports = app;
