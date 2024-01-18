const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Category = require("../model/category");

router.get("/", async (req, res) => {
  const categories = await Category.find();
  if (!categories) {
    return res.send("No categories found");
  }
  res.send(categories);
});
router.post("/", async (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });
  const category = await newCategory.save();
  res.status(201).send(category);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.send({ msg: "no category with id specified" });
  }
  res.send(category);
});
router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    },
    {
      new: true,
    }
  );
  if (!category) {
    res.send({ msg: "no category with id specified" });
  }
  res.send(category);
});
router.delete("/:id", (req, res) => {
  Category.findByIdAndRemove(req.params.id)
    .then((category) => {
      if (category) {
        return res
          .status(200)
          .json({ success: true, message: "the category is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "category not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
