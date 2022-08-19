const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const fs = require('fs');
const retrieveSecrets = require('./aws-client')
require('dotenv').config();
const port = process.env.PORT || 3000;


const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.clientSecret,
    baseURL: process.env.baseUrl,
    clientID: process.env.clientId,
    issuerBaseURL: process.env.issuerBaseUrl,
};



const app = express();
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));
app.use(auth(config));
app.set('view engine', 'ejs');


require('./routes')(app);
// app.get('*', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });
app.get('/', requiresAuth(), (req, res) => {
    res.render('./pages/index');
});
app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));

});



app.listen(port, async () => {
    try {
        //get secretsString:
        const secretsString = await retrieveSecrets();
        //write to .env file at root level of project:
        fs.writeFile(".env", secretsString, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        })
        console.log("Server running on port " + port);
    } catch (error) {
        //log the error and crash the app
        console.log("Error in setting environment variables", error);
        process.exit(-1);
    };
});
