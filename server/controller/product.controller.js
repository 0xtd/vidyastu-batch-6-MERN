const Product = require('../model/product.model');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { title, description, discountedPrice, originalPrice, imageUrl } = req.body;
    let newProduct = new Product({
      title, description, discountedPrice, originalPrice, imageUrl
    })
    newProduct = await newProduct.save();
    res.status(201).json(newProduct);
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}


