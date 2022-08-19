const Network = require('../models/network');
const db = require('../models/index');

module.exports = {
    list(req, res) {
        return db.Network
            .findAll()
            .then(networks => res.status(200).send(networks))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        return db.Network
            .create(req.body)
            .then(networks => res.status(201).send(networks))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return db.Network
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(networks => {
                networks.update(req.body)
                    .then(() => {
                        res.status(200).send('Network updated!');
                        console.log(req.body)
                    })
                    .catch(error => res.status(400).send(error.message));
            })
            .catch(error => res.status(400).send(error.message));
    },
    delete(req, res) {
        return db.Network
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(networks => res.status(200).send("Network deleted!"))
            .catch(error => res.status(400).send(error));

    }
}
