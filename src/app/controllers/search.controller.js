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
    
    async detail(req,res){
        try {
            const couse = await Couse.find({}).lean();
            res.render('detail', { couse });
        } catch (error) {
            res.status(500).json({message: 'Internal server error'});
        }
    }
    async showById(req, res){
        try {
            const couse = await Couse.findById(req.params.id).lean();
            res.render('update', { couse });
        } catch (error) {
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async UpDateById(req, res){
        try {
            await Couse.updateOne(
                {_id: req.params.id},
                req.body
            );
            res.redirect('/detail');
        } catch (error) {
            res.status(500).json('message: error');
        }
    }
}

module.exports = new SearchController();