const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Product = require("./Product");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/products/details", async (req, res) => {
  try {
    const product = await Product.findById(req.body.id);
    res.json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.post('/api/products/add', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
})

app.listen(process.env.PORT, async () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`"http://localhost:${process.env.PORT}/"`);
  });
});
