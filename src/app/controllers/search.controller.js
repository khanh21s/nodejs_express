const Couse = require('../models/Course.model');
class SearchController{
    async search(req, res){
        try {
            const couse = await Couse.find({}).lean();
            res.render('search', { couse });
            // res.json(couse);
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = new SearchController();