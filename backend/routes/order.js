const express = require("express");
const router = express.Router();
const Order = require("../model/order");

router.post("/", async (req, res) => {
  let newOrder = new Order({
    orderItems: itemIds,
    shippingAddress1: req.body.shippingAddress1,
    shippingAddress2: req.body.shippingAddress2,
    city: req.body.city,
    zip: req.body.zip,
    country: req.body.country,
    phone: req.body.phone,
    status: req.body.status,
    totalPrice: totalPrice,
    user: req.body.user,
  });
  const order = await newOrder.save();

  if (!order) return res.status(400).send("the order cannot be created!");

  res.send(order);
});

module.exports = router;
