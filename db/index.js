const { Client } = require('pg')
require('dotenv').config();


const client = new Client({
    host: "charter-db.clgi2wzmcapc.us-east-1.rds.amazonaws.com",
    port: 5432,
    user: "postgres",
    password: "password",
    database: "charter"
})


client.connect();

module.exports = client;