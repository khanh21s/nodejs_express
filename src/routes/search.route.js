const express = require('express');
const search = require('../app/controllers/search.controller.js');
const route = express.Router();
  
route.get('/', search.search);

module.exports = route;


