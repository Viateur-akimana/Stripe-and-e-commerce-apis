const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");
const userRouter = require("./routes/user");
const cors = require("cors");
require("dotenv").config();

//registering middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
//working with routes
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/users", userRouter);
//mongodb connection
mongoose
  .connect(
    "mongodb+srv://viateur123:viateur123@cluster0.judpzzu.mongodb.net/product?retryWrites=true&w=majority",

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    }
  )
  .then(() => console.log("successfully connected to database"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) =>
  console.log(`Server is running on port http://localhost:8080/`)
);
