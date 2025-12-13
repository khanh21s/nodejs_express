const Couse = require('../models/Course.model');

class SlugSearch {
    async slug(req, res){
        try {
            const couse = await Couse.findOne({slug: req.params.slug}).lean();
            if(!couse){
                res.status(404).send('Couse not found');
            }
            res.render('slug', { couse });
            console.log(req.params.slug);
        } catch (error) {
            res.status(500).json({message: 'error!'});
        }
    }
}

module.exports = new SlugSearch();