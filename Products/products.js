const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Product = require("./Product");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  const products = await Product.find();
  return res.json(products);
});

app.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  return res.json(product);
});

app.get("/products/search", async (req, res) => {
  const input = req.body.input;
  const products = await Product.find({ name: input });
  return res.json(products);
});

app.post("/products/add", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  return res.json({
    status: "Product saved",
  });
});

app.put("/products/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(product);
  // const product = await Product.findById(req.params.id);
  // product.name = req.body.name;
  // product.price = req.body.price;
  // product.description = req.body.description;
  // product.image = req.body.image;
});

app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  return res.json({
    status: "Product deleted",
  });
});

app.listen(3000, async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/new").then(() => {
    console.log("http://localhost:3000/");
  });
});
