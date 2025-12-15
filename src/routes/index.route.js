const search = require('../routes/search.route.js');
const slug = require('../routes/slug.route.js');
const create = require('../routes/create.route.js');
const detail = require('./detail.route.js');

function route(app){
    app.use('/create', create);
    app.use('/search', search);
    app.use('/:slug', slug);
    app.use('/detail', detail);

}

module.exports = route;
