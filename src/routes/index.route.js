const search = require('../routes/search.route.js');
const slug = require('../routes/slug.route.js');

function route(app){

    app.use('/search', search);
    app.use('/:slug', slug);

}

module.exports = route;
