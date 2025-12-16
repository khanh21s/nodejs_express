const express = require('express');
const search = require('../app/controllers/user.controller.js');
const route = express.Router();

route.get('/', search.search);

module.exports = route;


