const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');

router.post('/create-product', productController.createProduct);
router.get('/all-products', productController.allProducts);
router.get("/all-products/:id", productController.singleProduct);
router.put("/all-products/:id", productController.updateProduct);
router.delete("/all-products/:id", productController.deleteProduct);

module.exports = router;