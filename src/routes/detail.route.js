const express = require('express');
const route = express.Router();
const couse = require('../app/controllers/user.controller.js');

route.get('/:id/edit', couse.showById);
route.get('/', couse.detail);
route.put('/:id/edit', couse.UpDateById);
route.delete('/:id/delete', couse.Delete);

module.exports = route;

