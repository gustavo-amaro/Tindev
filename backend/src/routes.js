const express = require('express');
const DevController = require('./controllers/DevController');
const likeController = require('./controllers/LikeController')
const deslikeController = require('./controllers/DeslikeController')
const routes = express.Router();

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/deslikes', deslikeController.store);
module.exports = routes;