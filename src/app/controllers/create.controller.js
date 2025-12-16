const Couse = require('../models/Course.model');

class Create {
    async show(req, res){
        res.render('create');
    }
    async createForm(req, res){
        try {
            console.log('BODY: ', res.body);
            const {name, age, slug} = req.body;
            await Couse.create({
                name,
                age,
                slug,
            });

            res.render("success");
        } catch (error) {
            console.error("CREATE ERROR:", error);
            res.status(500).json({message: 'error create'});
        }
    }
}

module.exports = new Create();