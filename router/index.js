const express = require("express");
const router = express.Router()
const productcontroller = require('../controller/product.controller')

router.get("/products/:band",productcontroller.getProduct)

module.exports = router