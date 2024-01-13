const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

const item = mongoose.model("item", itemSchema);

module.exports = item;
