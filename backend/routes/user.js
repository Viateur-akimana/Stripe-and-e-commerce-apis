const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("express");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: req.body.passwordHash,
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
    street: req.body.street,
    apartment: req.body.apartment,
    zip: req.body.zip,
    city: req.body.city,
    country: req.body.country,
  });
  const user = await newUser.save();
  if (!user) {
    return res.send("No user created or registered");
  }
  res.status(201).send(user);
});
router.post("/login", async (req, res) => {
  const user = await User.find({ email: req.body.email });
  const secret = process.env.SECRET;
  if (!user) {
    return res.send("NO user found with the email");
  }
  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: "1w" });
    res.json({ user: user, token: token });
  } else {
    res.send("wrong password");
  }
  res.send(user);
});
router.get("/", async (req, res) => {
  const users = await User.find().select("name phone email");
  if (!users) return res.send("No users found");
  res.send(users);
});
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-passwordHash");

  if (!user) {
    res.status(500).json({ message: "The user with that ID is not found." });
  }
  res.status(200).send(user);
});
router.get(`/get/userCount`, async (req, res) => {
  const userCount = await User.countDocuments((count) => count);

  if (!userCount) {
    res.status(500).json({ success: false });
  }
  res.send({
    userCount: userCount,
  });
});

router.put("/:id", async (req, res) => {
  const user = await Category.findById(req.body.Category);
  if (!user) return res.status(400).send("The user is invalid");

  const product = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      passwordHash: req.body.passwordHash,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
      street: req.body.street,
      apartment: req.body.apartment,
      zip: req.body.zip,
      city: req.body.city,
      country: req.body.country,
    },
    { new: true }
  );
  if (!product) {
    res.send({ msg: "no product with id specified" });
  }
  res.send(product);
});
router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: "the user is deleted!" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "user not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});
module.exports = router;
