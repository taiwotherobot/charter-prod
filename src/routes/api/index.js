const { Client } = require('pg')
require('dotenv').config();


const client = new Client({
    host: process.env.HOST,
    port: process.env.dbPORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


client.connect();


const getAllShows = (req, response) => {
    client.query('SELECT * FROM public."Shows"', (err, results) => {
        if (err) {
            console.log(err.message);
        }
        response.send(results.rows);
    })
}


const getShowById = async (req, response) => {
    const id = parseInt(req.params.id);
    client.query('SELECT * FROM public."Shows" WHERE id = $1', [id], (err, results) => {
        if (err) {
            throw error
        }
        response.send(results.rows);
    })
}

const getShowByNetwork = async (req, response) => {
    let network_id = req.query.network_id;
    console.log(network_id);
    client.query('SELECT * FROM public."Shows" WHERE network_id = $1', [network_id], (err, results) => {
        if (err) {
            console.log(err.message);
        }
        response.send(results.rows);
    }
    )

}

const getShowByPackageId = async (req, response) => {
    let package_id = req.query.package_id;
    var sql = `SELECT * FROM public."Shows" WHERE package_id LIKE ('%' || $1 || '%')`;
    console.log(package_id);
    client.query(sql, [package_id], (err, results) => {
        if (err) {
            console.log(err.message);
        }
        response.send(results.rows);
    }
    )
}


const createShow = async (req, response) => {
    const { title, network, imdbRating, network_id } = req.body;
    client.query('INSERT INTO Shows (title, network, imdbRating, network_id) VALUES ($1, $2, $3, $4)', [title, network, imdbRating, network_id], (err, results) => {
        if (err) {
            throw error
        }
        response.send(results.rows);
    })

}

const updateShow = async (req, response) => {
    const id = parseInt(req.params.id);
    const { title, network, imdbRating, network_id } = req.body;

    client.query('UPDATE Shows SET title = $1, network = $2, imdbRating = $3, network_id = $4 WHERE id = $5', [title, network, imdbRating, network_id, id], (err, results) => {
        if (err) {
            console.log(err.message);
        }
        response.send(results.rows);
    })

}

const deleteShow = async (req, res) => {
    const id = parseInt(req.params.id);
    if (req.treatment == 'on') {
        client.query('DELETE FROM Shows WHERE id = $1', [id], (err, res) => {
            if (!err) {
                res.send(res.rows);
            }
        }).catch(err => {
            res.status(500).json({ error: err.message });
        }
        )
    }
}

const getAllPackages = async (req, response) => {
    client.query('SELECT * FROM public."Packages"', (err, results) => {
        if (err) {
            console.log(err.message);
        }
        response.send(results.rows);
    }
    )
}

const getPackageById = async (req, response) => {
    const id = parseInt(req.params.id);
    client.query('SELECT * FROM public."Packages" WHERE id = $1', [id], (err, results) => {
        if (err) {
            console.log(err.message);
        }
        response.send(results.rows);
    }
    )
}


module.exports = {
    getAllShows,
    getShowById,
    createShow,
    updateShow,
    deleteShow,
    getShowByNetwork,
    getShowByPackageId,
    getAllPackages,
    getPackageById
}

