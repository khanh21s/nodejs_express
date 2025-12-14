const search = require('../routes/search.route.js');
const slug = require('../routes/slug.route.js');
const create = require('../routes/create.route.js');

function route(app){
    app.use('/create', create);
    app.use('/search', search);
    app.use('/:slug', slug);

}

module.exports = route;
