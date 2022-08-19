require('dotenv').config

module.exports = {
	"development": {
		"username": process.env.username,
		"password": process.env.password,
		"database": process.env.database,
		"host": process.env.host,
		"dialect": "postgres"
	},
	"test": {
		"username": "postgres",
		"password": "password",
		"database": "charter_db",
		"host": "localhost",
		"dialect": "postgres"
	},
	"production": {
		"username": "postgres",
		"password": "password",
		"database": "charter_db",
		"host": "localhost",
		"dialect": "postgres"
	}
}
