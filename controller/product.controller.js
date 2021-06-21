const bcryptjs = require('bcryptjs')
const model = require('../models')
const jwt = require('jsonwebtoken')

const getProduct = async(req,res) =>{
    const band = req.params.band;
        var productAll = await model.Product.findAll({where: {Band: band}});
        if(productAll.length == 0){
            res.status(404).json({message:"Not Found"})
        }
        res.status(200).json({message:"success",data:productAll})
}

module.exports = {
    getProduct
}