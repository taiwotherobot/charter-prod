const showController = require('../controllers/show');
const networkController = require('../controllers/network');
const packageController = require('../controllers/package');
const { requiresAuth } = require('express-openid-connect');


module.exports = (app) => {
    app.get('/api/shows', requiresAuth(), async (req, res) => {
        if (req.query.network_id) {
            await showController.getByNetworkId(req, res);
        } else if (req.query.package_id) {
            await showController.getByPackageId(req, res);
        }
        else {
            await showController.list(req, res);
        }
    });
    app.get('/api/shows/:id', requiresAuth(), showController.getById);
    app.get('/api/networks', requiresAuth(), networkController.list);
    app.get('/api/packages', requiresAuth(), packageController.list);
    app.get('/api/packages/:id', requiresAuth(), packageController.getById);
    app.post('/api/packages', requiresAuth(), packageController.create);
    app.post('/api/networks', requiresAuth(), networkController.create);
    app.post('/api/shows', requiresAuth(), showController.create);
    app.put('/api/networks/:id', requiresAuth(), networkController.update);
    app.put('/api/shows/:id', requiresAuth(), showController.update);
    app.put('/api/packages/:id', requiresAuth(), packageController.update);
    app.delete('/api/networks/:id', requiresAuth(), networkController.delete);
    app.delete('/api/shows/:id', requiresAuth(), showController.delete);
    app.delete('/api/packages/:id', requiresAuth(), packageController.delete);

}