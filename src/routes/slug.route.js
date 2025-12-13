const express = require('express');
const route = express.Router();
const slugSearch = require('../app/controllers/slug.controller.js');

route.get('/:slug', slugSearch.slug);

module.exports = route;
