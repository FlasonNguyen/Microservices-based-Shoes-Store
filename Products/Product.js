const mongoose = require('mongoose');

const Product = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    basedGame: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', Product);