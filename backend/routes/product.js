const express = require('express');
const route= express.Router();
const Product = require("../model/products");

route.post("/",(req,res)=>{

        const newProduct = req.body;
        const product = Product.create(newProduct);
        res.status(201).json({product})
    
})
route.get("/",async(req,res)=>{
    const products = await Product.find();
    res.send(products)
})

module.exports=route