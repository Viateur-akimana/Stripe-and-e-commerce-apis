const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");
const userRouter = require("./routes/user");
const cors = require("cors");
const multer = require("multer")

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Home/Desktop/nodejs/e-commerce/backend/public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
app.post("/uploads",upload.single("products") ,(req,res)=>{
  res.send('File uploaded successfully!');
// res.json({
//   success:true,
//   data: req.file
// })
})
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
