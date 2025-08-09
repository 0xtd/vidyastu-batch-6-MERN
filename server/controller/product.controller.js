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
    console.log(newProduct._id);
    
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}


// Controller For all product fetching
exports.allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

// Controller for a single product
exports.singleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

// Controller for product update
exports.updateProduct = async (req, res) => {
  try {
    const { title, description, discountedPrice, originalPrice, imageUrl } = req.body;
    let updatedProduct = new Product({
      title, description, discountedPrice, originalPrice, imageUrl, _id: req.params.id
    })
    updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedProduct);
    res.json({ message: `Product with id ${req.params.id} updated successfully` })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}


// Controller for removing a single product
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.json({ message: `Product with id ${req.params.id} deleted successfully` })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}