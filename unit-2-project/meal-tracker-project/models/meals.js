const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema ({
    meal: {
        type: String
    },
    ingredients: {
        type: String
    },

    mealDay: {
        type: Date
    }    
});
