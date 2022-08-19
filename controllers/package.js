const Package = require('../models/package');
const db = require('../models/index');


module.exports = {
    list(req, res) {
        return db.Package
            .findAll()
            .then(packages => res.status(200).send(packages))
            .catch(error => res.status(400).send(error.message));
    },
    getById(req, res) {
        return db.Package
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(packages => res.status(200).send(packages))
            .catch(error => res.status(400).send(error));
    },
    create(req, res) {
        return db.Package
            .create(req.body)
            .then(packages => {
                console.log(req.body)
                res.status(201).send("Package created");
            })
            .catch(error => {
                console.log(error.message);
                res.status(400).send(error);
            });
    },
    update(req, res) {
        return db.Package
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(packages => {
                packages.update(req.body)
                    .then(() => res.status(200).send("Package updated!"))
                    .catch(error => res.status(400).send(error.message));
            })
            .catch(error => res.status(400).send(error.message));
    },
    delete(req, res) {
        return db.Package
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(packages => res.status(200).send("Package deleted!"))
            .catch(error => res.status(400).send(error.message));

    }
}

