const mongoose = require('mongoose');

const  productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        require:true
    },
    countInStock:{
        type:Number,
        required:true
    }
})

const product =mongoose.model("Product",productSchema);
module.exports= product;