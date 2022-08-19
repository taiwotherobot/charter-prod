const Show = require('../models/show');
const db = require('../models/index');
const { Op } = require('sequelize');

module.exports = {
    list(req, res) {
        return db.Show
            .findAll()
            .then(shows => res.status(200).send(shows))
            .catch(error => res.status(400).send(error.message));
    },
    getById(req, res) {
        return db.Show
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(shows => res.status(200).send(shows))
            .catch(error => res.status(400).send(error));
    },
    getByNetworkId(req, res) {
        return db.Show
            .findAll({
                where: { network_id: req.query.network_id }
            })
            .then(shows => res.status(200).send(shows))
            .catch(error => res.status(400).send(error));
    },
    getByPackageId(req, res) {
        return db.Show
            .findAll({
                where: { package_id: { [Op.like]: '%' + req.query.package_id + '%' } }
            })
            .then(shows => res.status(200).send(shows))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        return db.Show
            .create(req.body)
            .then(shows => {
                console.log(req.body)
                res.status(201).send("Show created");
            })
            .catch(error => {
                console.log(error.message);
                res.status(400).send(error);
            });
    },
    update(req, res) {
        return db.Show
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(shows => {
                shows.update(req.body)
                    .then(() => res.status(200).send("Show updated!"))
                    .catch(error => res.status(400).send(error.message));
            })
            .catch(error => res.status(400).send(error.message));
    },
    delete(req, res) {
        return db.Show
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(shows => res.status(200).send("Show deleted!"))
            .catch(error => res.status(400).send(error.message));

    }
}

