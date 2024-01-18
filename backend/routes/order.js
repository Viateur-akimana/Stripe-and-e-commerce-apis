const express = require("express");
const router = express.Router();
const Order = require("../model/order");
const { OrderItem } = require("../model/items");

router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ dateOrdered: -1 });
  if (!orders) {
    return res.send("No orders found");
  }
  res.send(orders);
});
router.get("/id", async (req, res) => {
  const order = await Order.findById(req.params._id).sort({ dateOrdered: -1 });
  if (!order) {
    return res.send("No order found");
  }
  res.send(order);
});
router.post("/", async (req, res) => {
  const orderItemsIds = req.body.orderItems.map(async (orderItem) => {
    let newOrderItem = new OrderItem({
      quantity: orderItem.quantity,
      product: orderItem.product,
    });

    newOrderItem = await newOrderItem.save();

    return newOrderItem._id;
  });
  const orderItemsIdsIn = await orderItemsIds;
  const totalPrices = await Promise.all(
    orderItemsIdsResolved.map(async (orderItemId) => {
      const orderItem = await OrderItem.findById(orderItemId).populate(
        "product",
        "price"
      );
      const totalPrice = orderItem.product.price * orderItem.quantity;
      return totalPrice;
    })
  );
  const totalPrice = totalPrices;
  let newOrder = new Order({
    orderItems: orderItemsIdsIn,
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
router.put("/:id", async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    {
      new: true,
    }
  );
  if (!order) {
    res.send({ msg: "no order with id specified" });
  }
  res.send(order);
});
router.delete("/:id", async (req, res) => {
  Order.findByIdAndRemove(req.params.id)
    .then((order) => {
      if (order) {
        order.orderItems.map(async (orderItem) => {
          OrderItem.findByIdAndRemove(orderItem);
        });
        return res
          .status(200)
          .json({ success: true, message: "the order is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "order not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

router.get("/get/count", async (req, res) => {
  const orderCount = await Order.countDocuments((count) => count);
  if (!orderCount) {
    return res.send("NO orders are there");
  }
  res.send({ orderNUmber: orderCount });
});

module.exports = router;
