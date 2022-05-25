const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
require("dotenv").config();
const Order = require("./Order");
const Cart = require("./Cart");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/api/cart", async (req, res) => {
  if (!req.session.cart) {
    return res.json({ products: null, totalPrice: 0 });
  }
  console.log(req.session.cart);
  let newCart = new Cart(req.session.cart);
  req.session.cart = newCart;
  return res.json({
    products: newCart.getItems(),
    totalPrice: newCart.totalPrice,
    cart: newCart,
  });
});
app.post("/api/cart", async (req, res) => {
  const products = await (
    await fetch(`http://localhost:3215/api/products/${req.body.id}`, {
      method: "GET",
    })
  ).json();
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.add(products, req.body.id);
  req.session.cart = cart;
  return res.json(cart);
});
app.delete("/api/cart", async (req, res) => {
  let cart = new Cart(req.session.cart);
  cart.remove(req.body.id);
  res.json(cart);
});
app.post("/api/order", async (req, res) => {
  const order = new Order({
    user: req.body.user,
    address: req.body.address,
    phone: req.body.phone,
    cart: req.session.cart,
  });
  const result = await order.save();
  res.json(result);
});

app.listen(process.env.PORT, async () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`http://localhost:${process.env.PORT}/`);
  });
});
