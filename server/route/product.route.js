const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');

router.post('/create-product', productController.createProduct);

module.exports = router;