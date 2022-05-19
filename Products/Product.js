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
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    createdAt: {   
        type: Date,
        default: Date.now
    },
    sale: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', Product);