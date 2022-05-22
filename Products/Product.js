const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  sale: {
    type: Boolean,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  genders: {
    type: String,
  },
});
module.exports = mongoose.model("Product", ProductSchema);
