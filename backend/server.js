import express from "express";
import {products} from "./data/dummyProduct.js";
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:category", (req, res) => {
  const {category} = req.params;

  let categoryArr;

  for (let i = 0; i < products.length; i++) {
    const temp = Object.keys(products[i]);

    for (const [key, value] of Object.entries(products[i])) {
      if (key === temp.toString() && key === category) {
        categoryArr = value;
        break;
      }
    }
  }

  res.json(categoryArr);
})

app.get("/api/products/:category/:id", (req, res) => {
  const {category, id} = req.params;
  let categoryArr;
  
  for (let i = 0; i < products.length; i++) {
    const temp = Object.keys(products[i]);

    for (const [key, value] of Object.entries(products[i])) {
      if (key === temp.toString() && key === category) {
        categoryArr = value;
        break;
      }
    }
  }

  const product = categoryArr.find((p) => p.id === id);
  res.json(product);
  
});



app.listen(5000, console.log("Server running on port 5000"));
