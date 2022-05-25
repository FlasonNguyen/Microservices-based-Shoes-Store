const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
  const products = await (
    await fetch("http://localhost:3215/api/products")
  ).json();
  return res.render("index", { products });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
