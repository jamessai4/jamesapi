const bcryptjs = require('bcryptjs')
const product = require("../product.json")
const jwt = require('jsonwebtoken')

const getProduct = async(req,res) =>{
    const band = req.params.band;
        var productAll = await product.product.find(x=>x.Band == band)
        console.log(productAll)
        if(productAll == undefined){
            res.status(404).json({message:"Not Found"})
        }
        res.status(200).json({message:"success",data:productAll})
}

module.exports = {
    getProduct
}