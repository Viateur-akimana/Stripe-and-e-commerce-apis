const express = require("express");
const route = express.Router();
const Product = require("../model/products");
const Category = require("../model/category");
const { default: mongoose } = require("mongoose");

route.post("/", async (req, res) => {
  const category = await Category.findById(req.body.Category);
  if (!category) return res.status(400).send("The category is invalid");

  let products = new Product({
    name: req.body.name,
    description: req.body.description,
    richDescription: req.body.richDescription,
    image: req.body.image,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    isFeatured: req.body.isFeatured,
  });
  const product = await products.save();
  if (!product) return res.send("No product created");

  res.status(201).send(product);
});
route.get("/", async (req, res) => {
  const products = await Product.find().select("name -_id");
  if (!products) return res.send("No products found");
  res.send(products);
});
route.get("/:id", async (req, res) => {
  const products = await Product.findById(req.params.id);
  if (!products) return res.send("No product with id found");
  res.send(products);
});
route.put("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send("the product id is invalid");
  }
  const category = await Category.findById(req.body.Category);
  if (!category) return res.status(400).send("The category is invalid");

  const product = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      richDescription: req.body.richDescription,
      image: req.body.image,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
    },
    { new: true }
  );
  if (!product) {
    res.send({ msg: "no product with id specified" });
  }
  res.send(product);
});
route.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then((product) => {
      if (product) {
        return res
          .status(200)
          .json({ success: true, message: "the product is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "product not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});
route.get("/get/count", async (req, res) => {
  const productCount = await Product.countDocuments((count) => count);
  if (!productCount) {
    return res.send("NO products counts are there");
  }
  res.send({ productCount: productCount });
});
route.get("/get/featured", async (req, res) => {
  const products = await Product.find({ isFeatured: true });
  if (!products) return res.send("No products found");
  res.send(products);
});
route.get("/get/featured/:count", async (req, res) => {
  const count = req.params.count;
  const products = await Product.find({ isFeatured: true }).limit(count);
  if (!products) return res.send("No products found");
  res.send(products);
});
module.exports = route;
