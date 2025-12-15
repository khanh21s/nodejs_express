const express = require('express');
const route = express.Router();
const couse = require('../app/controllers/search.controller.js');


route.get('/:id/edit', couse.showById);
route.get('/', couse.detail);
route.put('/:id/edit', couse.UpDateById);


module.exports = route;

