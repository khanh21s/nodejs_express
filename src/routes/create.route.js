const express = require('express');
const create = require('../app/controllers/create.controller.js');
const route = express.Router();

route.get('/', create.show);
route.post('/', create.createForm);

module.exports = route;


