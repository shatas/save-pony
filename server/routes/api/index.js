const express = require('express');
const controllers = require('./controllers');

const api = (config) => {
    const router = express.Router();

    const serviceController = controllers.service(config);
    router.get('/maze', serviceController.getMazeId);
    router.get('/data', serviceController.getMazeCurrentState);
    router.post('/next', serviceController.sendDirection);
    return router;
};

module.exports = api;
