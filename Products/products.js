const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

const Product = require("./Product");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products/search', async (req, res) => {
    const products = await Product.find({
        name: {
            $regex: req.body.name,
            $options: 'i'
        }
    });
    return res.json(products)
})
app.get("/products", async (req, res) => {
  await Product.find()
    .then((products) => {
      return res.json(products);
    })
    .catch((err) => {
      return res.json(err);
    });
});
app.post("/products/add", async (req, res) => {
  await Product.create(req.body).then((product) => {
    return res.json(product);
  });
});
app.put("/products/update/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body)
    .then((product) => {
      return res.json(product);
    })
    .catch((err) => {
      return res.json(err);
    });
});
app.delete("/products/delete/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      return res.json(product);
    })
    .catch((err) => {
      return res.json(err);
    });
})

app.listen(3000, async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/new").then(() => {
    console.log("http://localhost:3000/");
  });
});
