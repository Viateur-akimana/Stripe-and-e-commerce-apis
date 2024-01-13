const express = require("express");
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const productRouter = require('./routes/product')
require('dotenv').config();

//registering middlewares
app.use(morgan('tiny'))
app.use(express.json())
//working with routes
app.use('/api/v1/products',productRouter)
//mongodb connection
mongoose.connect('mongodb+srv://viateur123:viateur123@cluster0.judpzzu.mongodb.net/product?retryWrites=true&w=majority',{

})
.then(() =>console.log("successfully connected to database"))
.catch((err) => console.log(err))

const PORT = process.env.PORT || 8080
app.listen(PORT,(req,res)=>console.log(`Server is running on port http://localhost:8080/`))
    
