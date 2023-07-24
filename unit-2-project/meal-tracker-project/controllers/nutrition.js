const Meals = require('../models/meals');

async function create(req, res) {
    const meals = await Meals.findById(req.params.id);
    if (!meals.nutrition) {
        meals.nutrition = []
    }
    meals.nutrition.push(req.body);
    try {
        //save any changes made to the flight doc
        await meals.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/meals/${meals._id}`);
}


module.exports = {
    create
};